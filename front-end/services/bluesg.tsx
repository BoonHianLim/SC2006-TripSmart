import env from "../env";
import React, { useEffect, useState } from "react";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";

const calFare = (minutes: any) => {
  const cost = 0.46;
  var totalCost = 0;

  totalCost = cost * minutes;

  return totalCost;
};

export default class Bluesg {
  private BLUE_SG_API_KEY: string;
  constructor() {
    if (!env.BLUE_SG_API_KEY) {
      throw new Error("BLUE_SG_API_KEY environment variable is not set");
    }
    this.BLUE_SG_API_KEY = env.BLUE_SG_API_KEY || "";
  }
  async getResult(start: string, end: string, pax: number = 1): Result {
    return {
      name: "blueSG",
      iconURL:
        "https://play-lh.googleusercontent.com/zwdsPEl7NT_TxYjL83V6UnEwZjXljBHcr41o5D41xpqd0JC5odZY--yA9WWWrYIOCWw",
      data: this.getData(start, end, pax),
    };
  }
  async getData(
    start: string,
    end: string,
    pax: number = 1
  ): Promise<[number, number]>[] {
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

    const [duration, fare] = await googlemap.getDrivingData(start, end);
    return [
      [duration, fare],
      [duration, fare],
      [duration, fare],
    ];
  }
}

export const bluesg = new Bluesg();
//<Text>{JSON.stringify(data)}</Text>
