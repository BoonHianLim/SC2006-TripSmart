import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView
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

const GreetingPage2 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: Color.brandColorsCrayolaYellow
      }}>

      <View
          style={{
            marginTop: "25%",
            alignItems: "center",
            margin: "10%"
          }}>
          
            {/* Content put here */}
            
            <Image
              resizeMode="cover"
              source={require("../assets/selfdriving-2.png")}
              style={{
                flex: 1,
                marginBottom: "10%"
              }}
            />

            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(6.0),
                color: "black",
                marginBottom:  "5%",
                textAlign: "center"
                
              }}
            >Abundance of Choice</Text>

            <Text
              style={{
                fontFamily: FontFamily.montserratMedium,
                fontSize: responsiveScreenFontSize(2.0),
                color: "black",
                textAlign: "center"
                
              }}
            >TripSmart let’s you compare price fares and travel timings across all the major transport options available in Singapore from ride-hailing services and taxis to car rental and public transport services!</Text>

        </View>


        <LandingPageButton nextPage = "GreetingPage3"></LandingPageButton>
          
          <View
            style={{
              flexDirection: "row",
              paddingBottom: "3%",
              justifyContent: 'center',
            }}>
            <LandingThreeButton isSelected = {false} nextPage= "GreetingPage1"></LandingThreeButton>
            <LandingThreeButton isSelected = {true} nextPage= "GreetingPage2"></LandingThreeButton>
            <LandingThreeButton isSelected = {false} nextPage= "GreetingPage3"></LandingThreeButton>
          </View>


    </ScrollView>
  );
};

const styles = StyleSheet.create();

export default GreetingPage2;
