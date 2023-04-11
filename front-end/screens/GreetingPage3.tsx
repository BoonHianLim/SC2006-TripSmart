import * as React from "react";
import { useState } from 'react';
import {
  ImageBackground,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";
import LandingPageButton from "../components/LandingPageButton";
import { Button } from "@rneui/themed";
import LandingThreeButton from "../components/LandingThreeButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';

const messages = {
  en,
  ch,
  ms,
  ta
};

const GreetingPage3 = () => {
  const navigation = useNavigation();
  const message1 = "Abundance of Choice";
  const message2 = "TripSmart let’s you compare price fares and travel timings across all the major transport options available in Singapore from ride-hailing services and taxis to car rental and public transport services (buses and trains)!";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
          setResultText(messages.en["Abundance_of_Choice"]);
          break;
        case 'ch':
          setResultText(messages.ch["Abundance_of_Choice"]);
          break;
        case 'ms':
          setResultText(messages.ms["Abundance_of_Choice"]);
          break;
        case 'ta':
          setResultText(messages.ta["Abundance_of_Choice"]);
          break;
        default:
          setResultText(messages.en["Abundance_of_Choice"]);
      }
    })
    }
  )

  const myImage = require("../assets/backgroundimg.png");

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: Color.brandColorsCrayolaYellow,
      }}
    >
      <View
        style={{
          marginTop: "15%",
          alignItems: "center",
          margin: "10%",
        }}
      >
        {/* Content put here */}

        <Image
          resizeMode="cover"
          source={require("../assets/payment-2.png")}
          style={{
            flex: 0.25,
            marginBottom: "10%",
          }}
        />

        <Text
          style={{
            fontFamily: FontFamily.montserratBold,
            fontSize: responsiveScreenFontSize(6.0),
            color: "black",
            marginBottom: "5%",
            textAlign: "center",
          }}
        >
          {resultText && resultText[message1]}
        </Text>

        <Text
          style={{
            fontFamily: FontFamily.montserratMedium,
            fontSize: responsiveScreenFontSize(2.0),
            color: "black",
            textAlign: "center",
          }}
        >
          {resultText && resultText[message2]}
        </Text>
      </View>

      <LandingPageButton nextPage="LoginPage"></LandingPageButton>

      <View
        style={{
          flexDirection: "row",
          paddingBottom: "3%",
          justifyContent: "center",
          marginBottom: "3%",
        }}
      >
        <LandingThreeButton
          isSelected={false}
          nextPage="GreetingPage1"
        ></LandingThreeButton>
        <LandingThreeButton
          isSelected={false}
          nextPage="GreetingPage2"
        ></LandingThreeButton>
        <LandingThreeButton
          isSelected={true}
          nextPage="GreetingPage3"
        ></LandingThreeButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt7_64: {
    marginTop: 7.64,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  ml8_3: {
    marginLeft: Margin.m_4xs_3,
  },
  nextWrapperPosition: {
    left: 0,
    top: 0,
  },
  theBestTripPlanningTypo: {
    textShadowRadius: 3.39,
    textShadowOffset: {
      width: 0,
      height: 3.394230842590332,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontWeight: "800",
  },
  nextWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 25,
    borderRadius: 8297,
  },
  greetingPage1Child: {
    top: "0%",
    left: "0%",
    width: Dimensions.get("window").width,
    height: 1,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  adrienUwlsnmrmo0aUnsplash1Icon: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
  welcomeTo: {
    fontSize: 30,
    color: Color.textColorsInverse,
  },
  tripsmart: {
    fontSize: 40,
    color: Color.brandColorsCrayolaYellow,
  },
  welcomeToTripsmartContainer1: {
    width: "100%",
  },
  welcomeToTripsmartContainer: {
    fontFamily: FontFamily.montserratBold,
    display: "flex",
    width: "50%",
    height: "50%",
    alignItems: "center",
  },
  theBestTripPlanning: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FontFamily.montserratAlternatesBold,
    width: Dimensions.get("window").width * 0.6,
    color: Color.textColorsInverse,
  },
  welcomeToTripsmartParent: {
    top: Dimensions.get("window").height * 0.4,
    left: Dimensions.get("window").width * 0.25,
    position: "absolute",
  },
  next: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    textAlign: "center",
    width: "100%",
    color: Color.textColorsInverse,
  },
  nextWrapper: {
    borderRadius: 10,
    backgroundColor: Color.brandColorsNightPurple,
    paddingHorizontal: 0,
    paddingVertical: 13,
    width: "50%",
  },
  frameChild: {
    backgroundColor: Color.goldenrod_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4.1,
    height: 17,
  },
  frameItem: {
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    height: 10,
  },
  rectangleParent: {
    top: 54,
    left: 12,
    alignItems: "center",
  },
  navigationNext: {
    top: Dimensions.get("window").height * 0.8,
    left: "15%",
    height: "20%",
    width: "60%",
  },
  greetingPage1: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    flex: 1,
    height: Dimensions.get("window").height,
    overflow: "hidden",
    width: Dimensions.get("window").width,
  },
});

export default GreetingPage3;
