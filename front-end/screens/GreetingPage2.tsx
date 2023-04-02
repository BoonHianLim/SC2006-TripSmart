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
    }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          backgroundColor: Color.brandColorsCrayolaYellow
        }}
      >
        <View
          style={{
            margin: responsiveScreenHeight(6),
            alignItems: "center",
            marginTop: responsiveScreenHeight(10)
          }}>
          
            {/* Content put here */}
            
            <Image
              resizeMode="cover"
              source={require("../assets/selfdriving-2.png")}
              style={{
                height: responsiveScreenHeight(35),
                width: responsiveScreenHeight(35)
              }}
            />

            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(6.0),
                color: "black",
                marginBottom:  responsiveScreenHeight(1),
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
        
        <View>
            <LandingPageButton nextPage = "GreetingPage3"></LandingPageButton>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: "1%",
            marginBottom: "5%"
          }}>
            <LandingThreeButton isSelected = {false} ></LandingThreeButton>
            <LandingThreeButton isSelected = {true}></LandingThreeButton>
            <LandingThreeButton isSelected = {false}></LandingThreeButton>
        </View>
        

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt14_29: {
    marginTop: 14.29,
  },
  mt36: {
    marginTop: Margin.m_17xl,
  },
  ml8_3: {
    marginLeft: Margin.m_4xs_3,
  },
  tripsmartLetsYouClr: {
    color: Color.brandColorsNightPurple,
    textAlign: "center",
  },
  nextWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 25,
    borderRadius: 8297,
  },
  logosIcon: {
    width: 70,
    height: 70,
  },
  selfDriving2Icon: {
    width: 261,
    height: 262,
  },
  abundanceOfChoice: {
    fontSize: 45,
    letterSpacing: -0.4,
    lineHeight: 53,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 306,
    textAlign: "center",
  },
  tripsmartLetsYou: {
    fontSize: 13,
    letterSpacing: 0.1,
    lineHeight: 22,
    fontFamily: FontFamily.montserratRegular,
    width: 311,
    textAlign: "center",
  },
  abundanceOfChoiceParent: {
    width: 298,
    height: 199,
    alignItems: "center",
  },
  logosParent: {
    top: -34,
    left: -10,
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 0.85,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  next: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.textColorsInverse,
    width: 117,
    textAlign: "center",
  },
  nextWrapper: {
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: Color.brandColorsNightPurple,
    paddingHorizontal: 0,
    paddingVertical: 13,
    width: 117,
  },
  frameChild: {
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    height: 10,
  },
  frameItem: {
    backgroundColor: Color.goldenrod_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4.1,
    height: 20,
  },
  rectangleParent: {
    top: Dimensions.get("window").height * 0.05,
    left: Dimensions.get("window").width * 0.015,
    alignItems: "center",
  },
  navigationNext: {
    top: Dimensions.get("window").height * 0.8,
    left: Dimensions.get("window").width * 0.38,
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.3,
    position: "absolute",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  greetingPage2Inner: {
    width: 360,
    flex: 1,
  },
  greetingPage2: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
});

export default GreetingPage2;
