import * as React from "react";
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

const LandingPageButton = (props: any) => {
  const navigation = useNavigation();

  return (
    <View
        style={{
            width: "30%",
            height: "80%"
        }}>

        <Button
            title="Next"
            buttonStyle={{
                backgroundColor: "black",
                alignItems: "center",     
                borderRadius: 10
            }}

            onPress={()=>{navigation.navigate("GreetingPage3")}}
        />
        
        

        

        <View
            style={{
                flexDirection: "row",
            }}>
            <LandingThreeButton></LandingThreeButton>
            <LandingThreeButton></LandingThreeButton>
            <LandingThreeButton></LandingThreeButton>
        </View>

        
    </View>
  );
};

const styles = StyleSheet.create({});

export default LandingPageButton;
