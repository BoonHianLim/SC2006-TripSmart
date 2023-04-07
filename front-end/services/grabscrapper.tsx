import env from "../env";
import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { googlemap } from "./googlemap";
import { Result } from "../types/Result";

export default class Grab {
  constructor() {

  }

  async getGrabFare(pickupLocation: string, dropoffLocation: string, pax: number = 1) {
    try {
      const url = this.getURL() + "/farecheck?pickup=" + pickupLocation + "&dropoff=" + dropoffLocation;
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  getURL() {
    const { manifest } = Constants;

    let url = `http://${manifest?.debuggerHost?.split(':').shift()}:5000`;

    //if tunnel is being used, use the link in .env file.
    if (url.includes("anonymous")) {
      if(!env.GRAB_SCRAPPER_URL){
        throw new Error("You are using tunnel, and the .env file does not contains " +
            "GRAB_SCRAPPER_URL. Please insert the URL of where the Flask is start to the end of the .env file. For example:" +
            "GRAB_SCRAPPER_URL = 192.168.1.175:5000. If the URL is there, try yarn tunnelsFresh to clear the cache.")
      }
      url = "http://" + env.GRAB_SCRAPPER_URL
    }

    console.log(manifest);
    console.log("This is where the expo thinks the Flask server is started:", url);

    return url;
  }
}

export const grab = new Grab();
//<Text>{JSON.stringify(data)}</Text>
