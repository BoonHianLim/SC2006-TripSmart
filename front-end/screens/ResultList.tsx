import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Pressable, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsContainer from "../components/SettingsContainer";
import { FontFamily, Color } from "../GlobalStyles";
import env from '../env'

const start = ""
const end = ""

function ErrorHandler({error}) {
  return (
      <div role="alert">
        <p>An error occurred:</p>
        <pre>{error.message}</pre>
      </div>
  )
}
async function getDistance(currLoc:string, destination:string) {
  const [duration, setDuration] = useState<number>();
  const [distance, setDistance] = useState<number>();

  try {
    const GOOGLE_MAPS_API_KEY = env.GOOGLE_MAPS_API_KEY

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
      console.log("duration: "+duration)
      console.log("distance: "+distance)

      return duration

    }else{
      throw new Error();
    }
  }
  catch (error:any) {
    return <ErrorHandler error={error} />
  }
}

const BlueSg = (start:string, end:string) => {
  //call Google Map API
  console.log(getDistance("Jurong Point","NTU Hall of Residence 4"))
  const BLUE_SG_API_KEY = env.BLUE_SG_API_KEY
  const getStartLat = 1.3376342844358233;
  const getStartLng = 103.69414958176533;
  const query = (lat:number, lng:number) => {return {
    "query":"query ($lat: Float!, $lng: Float!, $providers: [String]) {vehicles(lat: $lat, lng: $lng, includeProviders: $providers) {lat lng provider{name website}}}",
    "variables":{"lat":lat,"lng":lng, "providers":["bluesg"]}
  }};
  const [data, updateData] = useState();
  useEffect(() => {
    const getData = async () => {
      const resp = await fetch('https://flow-api.fluctuo.com/v1?access_token=' + BLUE_SG_API_KEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(query(getStartLat,getStartLng))
      });
      const json = await resp.json();
      updateData(json);
    }
    getData();
  }, []);

  return <Text>{JSON.stringify(data)}</Text>
}

const ResultList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resultList}>
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <Pressable
            style={styles.image3}
            onPress={() => navigation.navigate("ResultFilter")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/image-3.png")}
            />
          </Pressable>
          <Image
            style={styles.headerChild}
            resizeMode="cover"
            source={require("../assets/arrow-11.png")}
          />
          <Text style={styles.resultText}>Results</Text>
        </View>
        <View style={styles.sortingGroup}>
          <Image
            style={styles.borderorange1Icon}
            resizeMode="cover"
            source={require("../assets/borderorange-1.png")}
          />
          <Image
            style={styles.border1Icon}
            resizeMode="cover"
            source={require("../assets/border-1.png")}
          />
          <View style={[styles.cheapestGroup, styles.groupLayout]}>
            <Image
              style={styles.cheapestGroupChild}
              resizeMode="cover"
              source={require("../assets/arrow-2.png")}
            />
            <Text style={[styles.cheapest, styles.fastestTypo]}>Cheapest</Text>
          </View>
          <View style={[styles.fastestGroup, styles.groupLayout]}>
            <Image
              style={styles.cheapestGroupChild}
              resizeMode="cover"
              source={require("../assets/arrow-21.png")}
            />
            <Text style={[styles.fastest, styles.fastestTypo]}>Fastest</Text>
          </View>
        </View>
      </View>
      <View style = {styles.result}>
        {BlueSg(start,end)}
      </View>
      <SettingsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 21,
    width: 98,
    top: 0,
    position: "absolute",
  },
  fastestTypo: {
    lineHeight: 20,
    fontSize: 15,
    left: 0,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image3: {
    left: 287,
    width: 36,
    top: 0,
    height: 36,
    position: "absolute",
  },
  headerChild: {
    top: 9,
    left: -1,
    width: 24,
    height: 19,
    position: "absolute",
  },
  resultText: {
    top: 6,
    left: 39,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  header: {
    top: 50,
    left: 19,
    width: 323,
    height: 36,
    position: "absolute",
  },
  borderorange1Icon: {
    top: 30,
    width: 176,
    height: 3,
    left: 0,
    position: "absolute",
  },
  border1Icon: {
    top: 22,
    left: 169,
    width: 166,
    height: 16,
    position: "absolute",
  },
  cheapestGroupChild: {
    top: 5,
    left: 95,
    width: 6,
    height: 11,
    position: "absolute",
  },
  cheapest: {
    color: "#f9bb00",
  },
  cheapestGroup: {
    left: 41,
  },
  fastest: {
    color: Color.black,
    lineHeight: 20,
    fontSize: 15,
  },
  fastestGroup: {
    left: 205,
  },
  sortingGroup: {
    top: 115,
    left: 5,
    width: 335,
    height: 38,
    position: "absolute",
  },
  headerParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  resultList: {
    backgroundColor: Color.textColorsInverse,
    height: 800,
    width: "100%",
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  result: {
    width: "100%",
    flex: 4,
  },
});

export default ResultList;
