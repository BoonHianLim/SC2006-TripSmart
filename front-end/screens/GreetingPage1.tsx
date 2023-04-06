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
      <ImageBackground
        source={myImage}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center"
        }}
        resizeMode='cover'
      >
        <ScrollView
          style={{
            flexGrow: 1,
          }}>

          <View
            style={{
              margin: "10%",
              marginTop: "90%",
              alignItems: "center",
              
            }}>
            
              <Text
                style={{
                  fontFamily: FontFamily.montserratBold,
                  fontSize: responsiveScreenFontSize(6.0),
                  color: "white",
                  marginBottom: "3%",
                }}>Welcome to <Text style={{color: Color.brandColorsCrayolaYellow}}> TripSmart</Text></Text>
            
            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(2.0),
                color: "white",
              }}>The best trip-planning app in Singapore that makes commuting more stress-free and accessible for everyone!</Text>
          </View>

          <LandingPageButton nextPage = "GreetingPage2"></LandingPageButton>
          
          <View
            style={{
              flexDirection: "row",
              paddingBottom: "3%",
              justifyContent: 'center',
            }}>
            <LandingThreeButton isSelected = {true} nextPage= "GreetingPage1"></LandingThreeButton>
            <LandingThreeButton isSelected = {false} nextPage= "GreetingPage2"></LandingThreeButton>
            <LandingThreeButton isSelected = {false} nextPage= "GreetingPage3"></LandingThreeButton>
          </View>
        


        </ScrollView>
      </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
 
});

export default GreetingPage1;
