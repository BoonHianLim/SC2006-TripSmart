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

        <LandingPageButton></LandingPageButton>
        
        <Text>Hello</Text>
        

        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>

        

      </ImageBackground>
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

export default GreetingPage1;
