import React, {useEffect, useState} from "react";
import env from "../env";


export default class Googlemap{
    private GOOGLE_MAPS_API_KEY: string;
    constructor() {
        if (!env.GOOGLE_MAPS_API_KEY) {
            throw new Error("GOOGLE_MAPS_API_KEY environment variable is not set")
        }
        this.GOOGLE_MAPS_API_KEY = env.GOOGLE_MAPS_API_KEY || "";
    }

    async getDataString(currLoc:string, destination:string, mode:string): Promise<[number, number]> {
        try {

            // haven't authenticate that both location r in singapore
            const urls = [
                "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + encodeURIComponent(currLoc.trim()) + "&key=" + this.GOOGLE_MAPS_API_KEY,
                "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + encodeURIComponent(destination.trim()) + "&key=" + this.GOOGLE_MAPS_API_KEY
            ]

            const requests = urls.map((url) => fetch(url));
            const responses = await Promise.all(requests);
            const errors = responses.filter((response) => !response.ok);

            if (errors.length > 0) {
                throw errors.map((response) => Error(response.statusText));
            }

            const json = responses.map((response) => response.json());
            const data = await Promise.all(json);

            if (data[0].predictions.length > 0 && data[1].predictions.length > 0){
                const id_Destination = data[1].predictions[0].place_id
                const id_CurrLoc = data[0].predictions[0].place_id
                console.log(id_Destination)
                console.log(id_CurrLoc)
                const res = await fetch("https://maps.googleapis.com/maps/api/directions/json?destination=place_id:" + id_Destination + "&origin=place_id:" + id_CurrLoc + "&mode=  " + mode + "&key=" + this.GOOGLE_MAPS_API_KEY)
                const resData = await res.json()
                const duration = parseFloat(resData.routes[0].legs[0].distance.text)
                const distance = parseFloat(resData.routes[0].legs[0].duration.text)
                console.log("duration: (in min)"+duration)
                console.log("distance: (in km)"+distance)
                if(duration == undefined || distance == undefined){
                    throw new Error("GoogleMapAPI: duration or distance is undefined!")
                }
                return [duration, distance]

            }else{
                throw new Error("GoogleMapAPI: starting point or destination cannot be processed!");
            }
        }
        catch (error:any) {
            throw new Error(error);
        }
    }

    async getLatitude(locText:string): Promise<[number, number]>{
        try{

            const res = await fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + locText + "&key=" + this.GOOGLE_MAPS_API_KEY)
            const resData = await res.json()

            const latitude = resData.results[0].geometry.location.lat
            const longtitude = resData.results[0].geometry.location.lng
            
            console.log("latitude: " + latitude)
            console.log("longtitude: " + longtitude)

            if(latitude == undefined || longtitude == undefined){
                throw new Error("GoogleMapAPI: longtitude or latitude is undefined!")
            }

            return [longtitude, latitude]

        }catch(error:any){
            throw new Error(error);
        }
    }    

    async getDataLatitude(currLoc:Array<string>, destination:Array<string>, mode:string): Promise<[number, number]> {
        try {

            const res = await fetch("https://maps.googleapis.com/maps/api/distancematrix/json?destinations=" + currLoc[0] + "%2C" + currLoc[1] + "&origins=" + destination[0] + "%2C" + destination[1] + "&mode=" + mode + "&key=" + this.GOOGLE_MAPS_API_KEY)
            const resData = await res.json()
          
            const distance = parseFloat(resData.rows[0].elements[0].distance.text)
            const duration = parseFloat(resData.rows[0].elements[0].duration.text)
            console.log("duration: (in min)"+duration)
            console.log("distance: (in km)"+distance)
            if(duration == undefined || distance == undefined){
                throw new Error("GoogleMapAPI: duration or distance is undefined!")
            }

            return [duration, distance]

        }
        catch (error:any) {
            throw new Error(error);
        }
    }



}
export const googlemap = new Googlemap();