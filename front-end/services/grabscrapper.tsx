import env from "../env";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";
import { Linking, Platform } from "react-native";
import TransportAPI from "./transportAPI";

export default class Grab extends TransportAPI{
  constructor() {super()}

  deepLinkFn = () => {
    if (Platform.OS === "ios") {
      Linking.canOpenURL(
        `itms-apps://itunes.apple.com/app/grab-taxi-food-delivery/id647268330`
      ).then((supported) => {
        if (supported) {
          Linking.openURL(
            `itms-apps://itunes.apple.com/app/grab-taxi-food-delivery/id647268330`
          );
        }
      });
    } else {
      Linking.canOpenURL(
        `https://play.google.com/store/apps/details?id=com.grabtaxi.passenger`
      ).then((supported) => {
        if (supported) {
          Linking.openURL(
            `https://play.google.com/store/apps/details?id=com.grabtaxi.passenger`
          );
        }
      });
    }
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
      var remainder4 = (pax%4==0? 0: 1);
      var remainder6 = (pax%6==0? 0: 1)
      // data.fare = ["JustGrab", "21 mins", "SGD 14.24 - 19.58", "GrabCar", "21 mins", "SGD 15.84 - 21.78", "GrabCar 6", "21 mins", "SGD 19.84 - 27.28"]
      const result: Result = {
        name: "Grab",
        iconURL:
          "https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png",
        data: [
          Promise.resolve([
            data.fare[0],
            parseInt(data.fare[1], 10),
            parseFloat(data.fare[2].split(" ")[1]) * (Math.floor(pax / 4) + remainder4),
          ]),
          Promise.resolve([
            data.fare[3],
            parseInt(data.fare[4], 10),
            parseFloat(data.fare[5].split(" ")[1]) * (Math.floor(pax / 4) + remainder4),
          ]),
          Promise.resolve([
            data.fare[6],
            parseInt(data.fare[7], 10),
            parseFloat(data.fare[8].split(" ")[1]) * (Math.floor(pax / 6) + remainder6),
          ]),
        ],
        deepLinkFn: this.deepLinkFn,
      };
      result.data[0].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price 
          }`
        );
      });
      result.data[1].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price 
          }`
        );
      });
      result.data[2].then(([service, duration, price]) => {
        console.log(
          `Service: ${service}, Duration: ${duration} minutes, Price: $${
            price 
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
