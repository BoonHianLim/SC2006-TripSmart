import env from "../env";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";
import { Linking } from "react-native";

export default class Grab {
  constructor() {}

  //deep link to grab
  deepLinkFn = () => {
    Linking.openURL("grab://app_home/payments");
  };

  async updateResult(
    pickupLocation: string,
    dropoffLocation: string,
    pax: number = 1,
    updateFn: any
  ) {
    const newData = await this.getResult(pickupLocation, dropoffLocation, pax);
    updateFn((prevResults: any) => [...prevResults, newData]);
  }
  async getResult(
    pickupLocation: string,
    dropoffLocation: string,
    pax: number = 1
  ) {
    try {
      const url =
        this.getURL() +
        "/farecheck?pickup=" +
        pickupLocation +
        "&dropoff=" +
        dropoffLocation;
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      // data.fare = ["JustGrab", "21 mins", "SGD 14.24 - 19.58", "GrabCar", "21 mins", "SGD 15.84 - 21.78", "GrabCar 6", "21 mins", "SGD 19.84 - 27.28"]
      const result: Result = {
        name: "Grab",
        iconURL:
          "https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png",
        data: [
          Promise.resolve([
            data.fare[0],
            parseInt(data.fare[1], 10),
            parseFloat(data.fare[2].split(" ")[1]),
          ]),
          Promise.resolve([
            data.fare[3],
            parseInt(data.fare[4], 10),
            parseFloat(data.fare[5].split(" ")[1]),
          ]),
          Promise.resolve([
            data.fare[6],
            parseInt(data.fare[7], 10),
            parseFloat(data.fare[8].split(" ")[1]),
          ]),
        ],
        deepLinkFn: this.deepLinkFn,
      };
      result.data[0].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price * (Math.floor(pax / 4) + 1)
          }`
        );
      });
      result.data[1].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price * (Math.floor(pax / 4) + 1)
          }`
        );
      });
      result.data[2].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price * (Math.floor(pax / 6) + 1)
          }`
        );
      });
      // Showing the console.log examples for the code above:
      // LOG  Service: JustGrab, Duration: 23 minutes, Price: $13.44
      // LOG  Service: GrabCar, Duration: 23 minutes, Price: $14.24
      // LOG  Service: GrabCar 6, Duration: 23 minutes, Price: $18.24
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getURL() {
    const { manifest } = Constants;

    let url = `http://${manifest?.debuggerHost?.split(":").shift()}:5000`;

    //if tunnel is being used, use the link in .env file.
    if (url.includes("anonymous")) {
      if (!env.GRAB_SCRAPPER_URL) {
        throw new Error(
          "You are using tunnel, and the .env file does not contains " +
            "GRAB_SCRAPPER_URL. Please insert the URL of where the Flask is start to the end of the .env file. For example:" +
            "GRAB_SCRAPPER_URL = 192.168.1.175:5000. If the URL is there, try yarn tunnelsFresh to clear the cache."
        );
      }
      url = "http://" + env.GRAB_SCRAPPER_URL;
    }

    console.log(manifest);
    console.log(
      "This is where the expo thinks the Flask server is started:",
      url
    );

    return url;
  }
}

export const grab = new Grab();
//<Text>{JSON.stringify(data)}</Text>
