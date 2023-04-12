//variable - data contains json object of history
import * as React from "react";
import { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import { History } from "../types/HistoryType";
import { Margin, FontFamily, Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import SettingsContainer from "../components/SettingsContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import HistoryScroll from "../components/HistoryRendering";
import { Button } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';
import HistoryController from "../controller/HistoryController";

const messages = {
  en,
  ch,
  ms,
  ta
};

const History1 = () => {
  const [counter, setCounter] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const navigation = useNavigation();
  const title = "History";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
          setResultText(messages.en["Navigation_bar"]);
          break;
        case 'ch':
          setResultText(messages.ch["Navigation_bar"]);
          break;
        case 'ms':
          setResultText(messages.ms["Navigation_bar"]);
          break;
        case 'ta':
          setResultText(messages.ta["Navigation_bar"]);
          break;
        default:
          setResultText(messages.en["Navigation_bar"]);
      }
    })
    }
  )


  //get email from localstorage
  React.useEffect(() => {
    historyController.getStatus().then((email) => {
      setEmail(email || ""); 
    });
  }, []);
  

  const historyController = new HistoryController();
  //useEffect
  React.useEffect(() => {
    if (email) {
      historyController.retrieveHistory(email).then((history) => {
        setHistory(history);
      });
    }
  }, [email]);

  return (
    historyController.getStatus(),
    console.log("status: ", email),
    (
      <GestureHandlerRootView style={{ flex: 1 }}>



          {/*dynamic rendering */}
          {email === "Guest" ? (
              <View style = {{flex:1}}>
                <View style={[styles.settings, styles.settingsLayout]}>
                  <View style={[styles.navbar, styles.navbarFlexBox]}>
                    <View
                        style={[
                          styles.frameParent,
                          styles.iconsFlexBox,
                          styles.iconsFlexBox1,
                        ]}
                    ></View>
                  </View>
                  <Image
                      style={[styles.fare13, styles.mt_2, styles.fare13Position]}
                      resizeMode="cover"
                      source={require("../assets/fare-1-3.png")}
                  />

                  <Text
                      style={[styles.tripsmart, styles.mt_2, styles.tripsmartLayout]}
                  >
                    TripSmart
                  </Text>

                  <Text style={[styles.settings1, styles.mt_2]}>{resultText && resultText[title]}</Text>
                </View>

            <View
              style={[
                styles.changePasswordWrapper,
                styles.mt_2,
                styles.changeWrapperFlexBox,
              ]}
            >
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[
                    styles.changePassword,
                    styles.changeTypo,
                    styles.tripsmartLayout,
                  ]}
                >
                  Login to Save and View History
                </Text>
              </Pressable>
            </View>
              </View>
          ) : (

              <ScrollView>
                <View style={[styles.settings, styles.settingsLayout]}>
                  <View style={[styles.navbar, styles.navbarFlexBox]}>
                    <View
                        style={[
                          styles.frameParent,
                          styles.iconsFlexBox,
                          styles.iconsFlexBox1,
                        ]}
                    ></View>
                  </View>
                  <Image
                      style={[styles.fare13, styles.mt_2, styles.fare13Position]}
                      resizeMode="cover"
                      source={require("../assets/fare-1-3.png")}
                  />

                  <Text
                      style={[styles.tripsmart, styles.mt_2, styles.tripsmartLayout]}
                  >
                    TripSmart
                  </Text>

                  <Text style={[styles.settings1, styles.mt_2]}>{resultText && resultText[title]}</Text>
                </View>
              {history.documents &&
                history.documents.map((item, index) => (
                  <HistoryScroll key={index} item={item} />
                ))}
              </ScrollView>

          )}


        <SettingsContainer selectedButton={"History"} />
      </GestureHandlerRootView>
    )
  );
};

//most of these styles are not being used here
const styles = StyleSheet.create({
  mt_2: {
    marginTop: Margin.m_15xs,
  },
  settingsLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  navbarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconsFlexBox1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  fare13Position: {
    left: 14,
    position: "absolute",
  },
  tripsmartLayout: {
    width: 304,
    textAlign: "center",
  },
  changeWrapperFlexBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: 43,
    backgroundColor: Color.goldenrod_200,
    borderRadius: 12,
    alignSelf: "stretch",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  changeTypo: {
    letterSpacing: 0.4,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  subtract: {
    borderRadius: 2,
    backgroundColor: Color.brandColorsNightPurple,
  },
  icons: {
    top: 6,
    left: 6,
    width: 28,
    height: 28,
    position: "absolute",
  },
  frameParent: {
    display: "none",
  },
  navbar: {
    width: 430,
    height: 171,
    paddingHorizontal: 24,
    paddingTop: 6,
    paddingBottom: 10,
    zIndex: 0,
    backgroundColor: Color.brandColorsCrayolaYellow,
    alignItems: "center",
  },
  fare13: {
    top: Dimensions.get("window").height * 0.07,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  tripsmart: {
    top: Dimensions.get("window").height * 0.07,
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 29,
    height: 31,
    zIndex: 2,
    color: Color.brandColorsNightPurple,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    width: 144,
    position: "absolute",
  },
  settings1: {
    top: Dimensions.get("window").height * 0.12,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 52,
    zIndex: 4,
    color: Color.textColorsMain,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  changePassword: {
    fontSize: 13,
    lineHeight: 12,
    color: Color.black,
  },
  changePasswordWrapper: {
    top: Dimensions.get("window").height * 0.5,
    left: Dimensions.get("window").width * 0.1,
  },
  km: {
    width: 59,
    color: Color.textColorsMain,
  },
  settings: {
    height: 170,
    alignItems: "center",
    backgroundColor: Color.textColorsInverse,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
  },
});

export default History1;
