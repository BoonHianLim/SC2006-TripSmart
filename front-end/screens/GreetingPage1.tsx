import * as React from "react";
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
import LandingThreeButton from "../components/LandingThreeButton";

const GreetingPage1 = () => {
  const navigation = useNavigation();

  const myImage = require("../assets/backgroundimg.png");

  return (
    <ScrollView
    style={{
      flexGrow: 1,
    }}
    >
      <ImageBackground
        source={myImage}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center"
        }}
      >
        <View
          style={{
            margin: responsiveScreenFontSize(4),
            marginTop: "90%",
            alignItems: "center"
            
          }}>
          
            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(6.0),
                color: "white",
                marginBottom:  responsiveScreenFontSize(1)
                
              }}>Welcome to <Text style={{color: Color.brandColorsCrayolaYellow}}> TripSmart</Text></Text>
          
          <Text
            style={{
              fontFamily: FontFamily.montserratBold,
              fontSize: responsiveScreenFontSize(2.0),
              color: "white"
            }}>The best trip-planning app in Singapore that makes commuting more stress-free and accessible for everyone!</Text>
        </View>
        
        <View>
            <LandingPageButton nextPage = "GreetingPage2"></LandingPageButton>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "5%"
          }}>
            <LandingThreeButton isSelected = {true} ></LandingThreeButton>
            <LandingThreeButton isSelected = {false}></LandingThreeButton>
            <LandingThreeButton isSelected = {false}></LandingThreeButton>
        </View>
        

      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 
});

export default GreetingPage1;
