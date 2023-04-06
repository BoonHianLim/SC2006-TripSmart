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
      style={[ props.isSelected ? styles.isTrue : styles.isFalse]}
      onPress={()=>{navigation.navigate(props.nextPage)}}
    >
      
      <View
        // style={[ props.isSelected ? styles.isTrue : styles.isFalse]}
        >
        {/* <Text style={{color: Color.backgroundColorsBackgroundLight1}}>Hi</Text> */}
      </View>
    </Pressable>

        

  );
};

const styles = StyleSheet.create({
  isTrue: {
    backgroundColor:Color.brandColorsCrayolaYellow,
    borderWidth: responsiveScreenHeight(0.5),
    borderColor: "black",
    borderRadius: 10 ,
    minWidth: "25%",
    maxWidth: "25%",
    minHeight: "3%",
    margin: "1%"
  },
  isFalse: {
    backgroundColor:"white",
    borderWidth: responsiveScreenHeight(0.5),
    borderColor: "black",
    borderRadius: 10 ,
    minWidth: "25%",
    maxWidth: "25%",
    minHeight: "3%",
    margin: "1%"
  }


});

export default LandingThreeButton;
