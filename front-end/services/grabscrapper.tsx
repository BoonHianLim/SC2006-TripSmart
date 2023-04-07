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
    const url = `http://${manifest.debuggerHost.split(':').shift()}:5000`;
    console.log("This is where the expo think the flask server is started: ",url);
    return url
  }
}

export const grab = new Grab();
//<Text>{JSON.stringify(data)}</Text>
