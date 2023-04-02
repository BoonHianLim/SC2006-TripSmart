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
    <Button
    title="Next"
    buttonStyle={{
        backgroundColor: "black",
        alignItems: "center",     
        borderRadius: 10,
        paddingLeft: "16%",
        paddingRight: "16%",


    }}

    onPress={()=>{navigation.navigate(props.nextPage)}}
/>
  );
};

const styles = StyleSheet.create({});

export default LandingPageButton;
