import env from "../env";
import { googlemap } from "./googlemap";
import React, { useEffect, useState } from "react";
import { Result } from "../types/Result";
import { Linking } from "react-native";

export default class Publictransport {
  async updateResult(
    pickupLocation: string,
    dropoffLocation: string,
    pax: number = 1,
    updateFn: any
  ) {
    const newData = await this.getResult(pickupLocation, dropoffLocation, pax);
    updateFn((prevResults: any) => [...prevResults, newData]);
  }

  //call googleMap
  deepLinkFn = () => {
    const origin = "Jurong East";
    const destination = "Changi Airport";

    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}`;

    Linking.openURL(url);
  };

  async getData(
    start: string,
    end: string,
    pax: number
  ): Promise<[string, number, number]> {
    //Call Google Map API

    var duration = 0;
    var distance = 0;

    await googlemap
      .getDataString(start, end, "transit")
      .then((ptData: [number, number]) => {
        console.log(ptData);
        duration = ptData[0];
        distance = ptData[1];
      })
      .catch((err: any) => {
        console.log(err);
      });

    var fare = this.calFare(distance);
    fare *= pax;

    return ["Public Transport", duration, fare.toFixed(2)];
  }

  async getResult(start: string, end: string, pax: number): Promise<Result> {
    const returnedResult: Result = {
      name: "Public Transport",
      iconURL: "https://cdn-icons-png.flaticon.com/512/9235/9235252.png",
      data: [this.getData(start, end, pax)],
      deepLinkFn: this.deepLinkFn,
    };

    return returnedResult;
  }

  calFare(distance: number): number {
    var fare = 0;
    if (distance <= 3.2) {
      fare = 1.7;
    } else if (distance > 3.2 && distance <= 6.2) {
      fare = 1.9;
    } else if (distance > 6.2 && distance <= 9.2) {
      fare = 2.1;
    } else if (distance > 9.2 && distance <= 11.2) {
      fare = 2.3;
    } else if (distance > 11.2 && distance <= 15.2) {
      fare = 2.5;
    } else if (distance > 15.2 && distance <= 19.2) {
      fare = 2.6;
    } else if (distance > 19.2 && distance <= 23.2) {
      fare = 2.7;
    } else {
      fare = 2.8;
    }

    return fare;
  }
}

export const publictransport = new Publictransport();
//<Text>{JSON.stringify(data)}</Text>
