import env from "../env";
import React, { useEffect, useState } from "react";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";
import { Linking } from "react-native";
import TransportAPI from "./transportAPI";

export default class Bluesg extends TransportAPI{
  private BLUE_SG_API_KEY: string;
  constructor() {
    super()
    if (!env.BLUE_SG_API_KEY) {
      throw new Error("BLUE_SG_API_KEY environment variable is not set");
    }
    this.BLUE_SG_API_KEY = env.BLUE_SG_API_KEY || "";
  }

  async updateResult(
    pickupLocation: string,
    dropoffLocation: string,
    pax: number = 1,
    updateFn: any
  ) {
    const newData = await this.getResult(pickupLocation, dropoffLocation, pax);
    updateFn((prevResults: any) => [...prevResults, newData]);
  }
  async getData(
    start: string,
    end: string,
    pax: number
  ): Promise<[string, number, number]> {
    //call Google Map API
    const getStartLat = 1.3376342844358233;
    const getStartLng = 103.69414958176533;

    const query = (lat: number, lng: number) => {
      return {
        query:
          "query ($lat: Float!, $lng: Float!, $providers: [String]) {vehicles(lat: $lat, lng: $lng, includeProviders: $providers) {lat lng provider{name website}}}",
        variables: { lat: lat, lng: lng, providers: ["bluesg"] },
      };
    };

    const resp = await fetch(
      "https://flow-api.fluctuo.com/v1?access_token=" + this.BLUE_SG_API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query(getStartLat, getStartLng)),
      }
    );
    const json = await resp.json();
    console.log(json);

    var duration = 0;
    var distance = 0;

    await googlemap
      .getDataString(start, end, "driving")
      .then((bluesgData: [number, number]) => {
        console.log(bluesgData);
        duration = bluesgData[0];
        distance = bluesgData[1];
      })
      .catch((err: any) => {
        console.log(err);
      });

    var fare = this.calFare(distance);
    fare *= (Math.floor(pax / 6) + 1);

    return ["BlueSG", duration, fare.toFixed(2)];
  }

  deepLinkFn = () => {
    console.log("pressed blue");
    Linking.openURL("https://www.bluesg.com.sg/car-sharing#map");
  };

  async getResult(start: string, end: string, pax: number): Promise<Result> {
    //deep link

    const returnedResult: Result = {
      name: "blueSG",
      iconURL:
        "https://play-lh.googleusercontent.com/zwdsPEl7NT_TxYjL83V6UnEwZjXljBHcr41o5D41xpqd0JC5odZY--yA9WWWrYIOCWw",
      data: [this.getData(start, end, pax)],
      deepLinkFn: this.deepLinkFn,
    };

    return returnedResult;
  }

  calFare = (minutes: any) => {
    const cost = 0.46;
    var totalCost = 0;

    totalCost = cost * minutes;

    return totalCost;
  };
}

export const bluesg = new Bluesg();
//<Text>{JSON.stringify(data)}</Text>
