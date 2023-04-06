import env from "../env";
import React, { useEffect, useState } from "react";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";

//figure out the number of pax, the prices for different number of people selected
const getComfortRIDE() = (minutes: any, distance: any) => {
    const baseFare = 2.8;
    const perKm = 0.5;
    const perMin = 0.15;
    var totalCost = 0;

    totalCost = (baseFare + (perKm*distance) + (perMin*minutes));

    if(totalCost < 6.00)
    {
        totalCost = 6.00;
    }
    return totalCost;
}

const getFare() = (minutes: any, distance: any) => {

    
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