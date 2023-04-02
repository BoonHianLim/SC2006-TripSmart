import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Color, FontFamily, Padding } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";


const LandingThreeButton = (props: any) => {
  const navigation = useNavigation();

  return (

        <Pressable
            style={{
                backgroundColor: "blue"
            }}>

            <View
                style={{
                    marginTop: "8%",
                    backgroundColor:"black",
                    minHeight: "20%",
                    maxHeight: "20%",

                    minWidth: "40%",
                    maxWidth: "100%",
                    
                    marginLeft: "0%",
                    marginRight: "0%",
                    
                    alignItems: "center",
                    alignContent: "center",
                    
                    borderWidth: responsiveScreenHeight(0.4),
                    borderColor: Color.brandColorsCrayolaYellow,
                    
                    borderRadius: 10 ,


                }}>

            </View>

        </Pressable>

        

  );
};

const styles = StyleSheet.create({});

export default LandingThreeButton;
