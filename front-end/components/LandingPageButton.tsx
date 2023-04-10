import * as React from "react";
import { useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import LandingThreeButton from "./LandingThreeButton";
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

const LandingPageButton = (props: any) => {
  const navigation = useNavigation();
  const buttonText = "Next";
  const [resultText, setResultText] = useState(buttonText);

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
          setResultText(messages.en["Next"]);
          break;
        case 'ch':
          setResultText(messages.ch["Next"]);
          break;
        case 'ms':
          setResultText(messages.ms["Next"]);
          break;
        case 'ta':
          setResultText(messages.ta["Next"]);
          break;
        default:
          setResultText(messages.en["Next"]);
      }
    })
    }
  )

  return (
    <View
      style={{
        alignItems: "center"
      }}>
      <View
        style={{
          width: "80%",     
          marginBottom: "2%"     
        }}>
        <Button
          title={resultText}
          buttonStyle={{
              backgroundColor: "black",  
              borderRadius: 10,
              paddingLeft: "16%",
              paddingRight: "16%",
          }}

          onPress={()=>{navigation.navigate(props.nextPage)}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LandingPageButton;
