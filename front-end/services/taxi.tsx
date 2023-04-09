import env from "../env";
import React, { useEffect, useState } from "react";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";

//figure out the number of pax, the prices for different number of people selected


/*SHOULD I +/- a certain % to account for supply and demand? 
like i think theres usually a +/-16% gap sometimes between prices due to supply and demand? 
or should i output a range for the price (i.e. output a string: '$10-13' instead of a fixed float value of $11.00)? */

//1) taxi calculation using (ComfortRIDE* FARE)
const getComfortRIDE() = (minutes: any, distance: any) => {
    
    const comfortRIDEFareMap = new Map<string, [string, number]>();
    type Prices = {
        name: string;
        fareType: string;
        baseFare: number;
        perKm: number;
        perMin: number;
    };
    const priceTier: Prices = { name: "ComfortRide", fareType: "ComfortRIDE (Car or Taxi Flat Fare)", baseFare: 2.8, perKm: 0.5, perMin: 0.15 };
    let totalFare = (priceTier.baseFare + (priceTier.perKm * distance) + (priceTier.perMin * minutes));
    if (totalFare < 6.00) {
        totalFare = 6.00;
    }
    comfortRIDEFareMap.set(priceTier.name, [priceTier.fareType, totalFare]);

    //console.log(`total cost = $${totalFare}`);
    //console.log(comfortRIDEFareMap);

    //returns a Map data structure with the single taxi/car ComfortRIDE* FARE
    return comfortRIDEFareMap;
    /*Example of output
    Map(1) {
        'ComfortRide' => [ 'ComfortRIDE (Car or Taxi Flat Fare)', 11 ]
    }
    */
}

//2) taxi calculation using (METERED FARE). 4 fare types:{Hyundai i-40 Taxi, Toyota Prius/Hyundai Ioniq Hybrid Taxis, Hyundai Ioniq EV/Hyundai Kona EV/BYD e6 Electric Vehicle Taxis, Limousine Cab}
const getMeteredFare() = (minutes: any, distance: any) => {

    //To get the current time:
    //1) if the time is between 12am and 6am (00 to 06)hr Late Night surcharge applies (50% extra Of Metered Fare)
    //2) if the time is between (6am - 9.30am) or (6pm - 12am) Peak Period surcharge applies (25% extra Of Metered Fare)
    const currentDate: Date = new Date();
    const currentHour: number = currentDate.getHours();
    const currentDayOfWeek: number = currentDate.getDay();
    const currentMinute: number = currentDate.getMinutes();

    const meteredFareMap = new Map<string, [string, number]>();
    type Prices = {
        name: string;
        fareType: string;
        flagDown: number;
        perDistance: number;
        perTime: number;

    };
    const priceTiers: Prices[] = [
        { name: "Metered Gasoline Taxi", fareType: "Metered Hyundai i-40 Taxi", flagDown: 3.90, perDistance: 0.25, perTime: 0.25 },
        { name: "Metered Hybrid Taxi", fareType: "Metered Toyota Prius/Hyundai Ioniq Hybrid Taxis", flagDown: 4.10, perDistance: 0.25, perTime: 0.25 },
        { name: "Metered EV Taxi", fareType: "Metered Hyundai Ioniq/Hyundai Kona/BYD e6 Electric Vehicle Taxis", flagDown: 4.30, perDistance: 0.25, perTime: 0.25 },
        { name: "Metered Limousine Taxi", fareType: "Metered Limousine Cab", flagDown: 4.10, perDistance: 0.35, perTime: 0.35 },
    ];

    for (let i = 0; i < priceTiers.length; i++) {
        let fare = 0;
        let distanceLeft = distance;

        if (distance > 10) {
            distanceLeft -= 10;
            fare = priceTiers[i].flagDown + (priceTiers[i].perDistance * (Math.ceil((10.0 - 1) / 0.4) + Math.ceil(distanceLeft / 0.35))) + (priceTiers[i].perTime * Math.ceil(minutes * (60 / 45)));
        }
        else {
            distanceLeft -= 1;
            fare = priceTiers[i].flagDown + (priceTiers[i].perDistance * Math.ceil(distanceLeft / 0.4)) + (priceTiers[i].perTime * Math.ceil(minutes * (60 / 45)));
        }
        
        //Peak Period surcharge
        if ((currentDayOfWeek >= 1 && currentDayOfWeek <= 5 && ((currentHour >= 6 && currentHour < 9) || (currentHour == 9 && currentMinute < 30))) || (currentHour >= 18 && currentHour < 00)) {
            fare *= 1.25;
        } 
        
        //Late Night surcharge
        if (currentHour >= 0 && currentHour < 6)
        {
            fare *= 1.5;
        }

        meteredFareMap.set(priceTiers[i].name, [priceTiers[i].fareType, fare]);
        //console.log(`fare for  ${priceTiers[i].fareType} = $${fare.toFixed(2)} \n`);
    }
    //console.log(meteredFareMap);
    //console.log(priceTiers);

    //returns a Map data structure with the 4 Metered fares
    return meteredFareMap;
    /*Example of output
    Map(4) {
        'Metered Gasoline Taxi' => [ 'Metered Hyundai i-40 Taxi', 14.65 ],
        'Metered Hybrid Taxi' => [ 'Metered Toyota Prius/Hyundai Ioniq Hybrid Taxis', 14.85 ],
        'Metered EV Taxi' => [ 'Metered Hyundai Ioniq/Hyundai Kona/BYD e6 Electric Vehicle Taxis', 15.05],
        'Metered Limousine Taxi' => [ 'Metered Limousine Cab', 19.15 ]
    }    
    */
}  

//3) Limo Transfer Fare (Limousine Cab Services) Taxi Calculation. 2 fare types:{LimoCab (4-seater Limo), MaxiCab (6/7 Seater MaxiCab)}
const getLimoTransferFare() = (minutes: any, distance: any) => {

    const limousineCabFareMap = new Map<string, [string, number]>();

    // to get the current time: if the time is between 12am and 6am (00 to 06)hr surcharge applies
    const currentDate: Date = new Date();
    const currentHour: number = currentDate.getHours();

    type Prices = {
        name: string;
        fareType: string;
        hourlyRate: number;
        lateNightSurcharge: number;
        blockWaitingTime: number;

    };

    const priceTiers: Prices[] = [
        { name: "LimoCab", fareType: "Limo Transfer Fare (4 Seater Limo)", hourlyRate: 50.0, lateNightSurcharge: 12.0, blockWaitingTime: 10.0 },
        { name: "MaxiCab", fareType: "Limo Transfer Fare (6/7 Seater MaxiCab)", hourlyRate: 55.0, lateNightSurcharge: 12.0, blockWaitingTime: 10.0 },
    ];

    for (let i = 0; i < priceTiers.length; i++) {
        let fare = 0;
        let tripHours = Math.ceil(minutes / 60);

        if (currentHour >= 0 && currentHour < 6) {

            fare = (priceTiers[i].hourlyRate * tripHours) + (priceTiers[i].lateNightSurcharge * tripHours);
        }
        else {
            fare = (priceTiers[i].hourlyRate * tripHours);
        }

        limousineCabFareMap.set(priceTiers[i].name, [priceTiers[i].fareType, fare]);
        //console.log(`fare for  ${priceTiers[i].fareType} = $${fare.toFixed(2)} \n`);
    }
    //console.log(limousineCabFareMap);
    //console.log(priceTiers);

    //returns a Map data structure with the 2 Limo Transfer Fares
    return limousineCabFareMap;
    /*Example of output
    Map(2) {
        'LimoCab' => [ 'Limo Transfer Fare (4 Seater Limo)', 50 ],
        'MaxiCab' => [ 'Limo Transfer Fare (6/7 Seater MaxiCab)', 55 ]
    }
    */
}

export default class Taxi{
    private TAXI_API_KEY: string;
    constructor() {
        if (!env.TAXI_API_KEY) {
            throw new Error("TAXI_API_KEY environment variable is not set")
        }
        this.TAXI_API_KEY = env.TAXI_API_KEY || "";
    }

    async getData(start:string, end:string, pax: number = 1): Promise<[number, number]>{
        // Please complete the code here
        const getStartLat = 1.3376342844358233;
        const getStartLng = 103.69414958176533;



    }
}

export const taxi = new Taxi();
//<Text>{JSON.stringify(data)}</Text>