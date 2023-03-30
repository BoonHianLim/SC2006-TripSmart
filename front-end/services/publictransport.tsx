import env from "../env";
import { googlemap } from "./googlemap";
import React, {useEffect, useState} from "react";

export default class Publictransport{
    private PUBLIC_TRANSPORT_API_KEY: string;
    constructor() {
        if (!env.PUBLIC_TRANSPORT_API_KEY) {
            throw new Error("PUBLIC_TRANSPORT_API_KEY environment variable is not set")
        }
        this.PUBLIC_TRANSPORT_API_KEY = env.PUBLIC_TRANSPORT_API_KEY || "";
    }

<<<<<<< HEAD
    async getData(start:string, end:string): Promise<[String, number, number]>{

        //Call Google Map API
        const [duration, distance] = await googlemap.getDataString(start, end, "transit");
        var fare = this.getFare(distance);
        return ["Public Transport", duration, fare];

    }

    getFare(distance: number): number{
        
        // const [duration, distance] = await googlemap.getDataString(start, end, "transit");
=======
    async getData(start:string, end:string): Promise<[number, number]>{

        //Call Google Map API
        const [duration, distance] = await googlemap.getDataString(start, end, "transit");
        return [duration,distance];

    }

    getFare(start:string, end:string): number{
        
        const [duration, distance] = googlemap.getDataString(start, end, "transit");
>>>>>>> edffbc3 (update getfare from public transport)

        // const resp = await fetch('https://api.stb.gov.sg/services/transport/v2/mrt-lrt/fare-types', {
        //     method: 'GET',
        //     headers: {
        //         "ApiEndPointTitle" : "Get MRT & LRT Fare Types",
        //         "X-API-Key" : "IUARFRWUYVcb60dBLafJHCY2SRKMqhdW"
        //     },
        //     body: JSON.stringify(query(getStartLat,getStartLng))
        // });
        // const json = await resp.json();
        // console.log(json);

        var fare = 0;
        if (distance <= 3.2){
            fare = 1.70;
        }
        else if (distance > 3.2 && distance <= 6.2){
            fare = 1.90;
        }
        else if (distance > 6.2 && distance <= 9.2){
            fare = 2.10;
        }
        else if (distance > 9.2 && distance <= 11.2){
            fare = 2.30;
        }
        else if (distance > 11.2 && distance <= 15.2){
            fare = 2.50;
        }
        else if (distance > 15.2 && distance <= 19.2){
            fare = 2.60;
        }
        else if (distance > 19.2 && distance <= 23.2){
            fare = 2.70;
        }
        else{
            fare = 2.80;
        }
    
        return fare;
    }

}

export const publictransport = new Publictransport();
//<Text>{JSON.stringify(data)}</Text>