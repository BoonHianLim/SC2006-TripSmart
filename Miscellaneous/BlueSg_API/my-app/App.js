import React, { useState, useEffect } from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import env from './env'
// import axios from 'axios';

const tempData = {
  "query":"query ($lat: Float!, $lng: Float!) {providers (lat: $lat, lng: $lng){ name slug website app {android ios }}}",
  "variables":{"lat":1.3376342844358233,"lng":103.69414958176533}
};

const ParentThatFetches = () => {
  const [data, updateData] = useState();
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('https://flow-api.fluctuo.com/v1?access_token=iLZTWrkvrlBHH4j4iScF84ASHmRMXwcA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tempData)
      });
      const json = await resp.json();
      updateData(json);
    }
    getData();
  }, []);

  return <Text>{JSON.stringify(data)}</Text>
}

class InvalidLocations extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidLocations";
  }
}


const getDistance = async (currLoc, destination) => {
  const [duration, setDuration] = useState();
  const [distance, setDistance] = useState();

  try {
    const {GOOGLE_MAPS_API_KEY} = env

    // haven't authenticate that both location r in singapore
    const urls = [
      "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + encodeURIComponent(currLoc.trim()) + "&key=" + GOOGLE_MAPS_API_KEY,
      "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=" + encodeURIComponent(destination.trim()) + "&key=" + GOOGLE_MAPS_API_KEY
    ]

    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const errors = responses.filter((response) => !response.ok);

    if (errors.length > 0) {
      throw errors.map((response) => Error(response.statusText));
    }

    const json = responses.map((response) => response.json());
    const data = await Promise.all(json);

    //distance if ONLY public transport is used check if both geo location ok (blm)
    if (data[0].predictions.length > 0 && data[1].predictions.length > 0){
      const id_Destination = data[1].predictions[0].place_id
      const id_CurrLoc = data[0].predictions[0].place_id
      console.log(id_Destination)
      console.log(id_CurrLoc)
      const res = await fetch("https://maps.googleapis.com/maps/api/directions/json?destination=place_id:" + id_Destination + "&origin=place_id:" + id_CurrLoc + "&mode=transit" + "&key=" + GOOGLE_MAPS_API_KEY)
      const resData = await res.json()
      setDistance(parseFloat(resData.routes[0].legs[0].distance.text))
      setDuration(parseFloat(resData.routes[0].legs[0].duration.text))
      console.log(duration)
      console.log(distance)

      return duration
    
    }else{
      throw new InvalidLocations()
    }
  }
  catch (error) {
    if (error instanceof InvalidLocations) {
      console.log(error.message);
    } else {
      console.log("An error occurred:", error);
    }
  }
};

const Cat = () => {
  return (<View style={styles.container}>
    {ParentThatFetches()}
    <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
    />

    <Text>{JSON.stringify(getDistance("hall 11", "axcell tuition center"))}</Text>

    <TextInput>Hi?</TextInput>

  </View>);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Cat;