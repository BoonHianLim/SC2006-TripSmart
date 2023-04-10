import * as React from "react";
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
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

const GreetingPage2 = () => {
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

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: Color.brandColorsCrayolaYellow,
      }}
    >
      <View
        style={{
          marginTop: "25%",
          alignItems: "center",
          margin: "10%",
        }}
      >
        {/* Content put here */}

        <Image
          resizeMode="cover"
          source={require("../assets/selfdriving-2.png")}
          style={{
            flex: 1,
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

      <LandingPageButton nextPage="GreetingPage3"></LandingPageButton>

      <View
        style={{
          flexDirection: "row",
          paddingBottom: "3%",
          justifyContent: "center",
        }}
      >
        <LandingThreeButton
          isSelected={false}
          nextPage="GreetingPage1"
        ></LandingThreeButton>
        <LandingThreeButton
          isSelected={true}
          nextPage="GreetingPage2"
        ></LandingThreeButton>
        <LandingThreeButton
          isSelected={false}
          nextPage="GreetingPage3"
        ></LandingThreeButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create();

export default GreetingPage2;
