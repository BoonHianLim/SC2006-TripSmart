import * as React from "react";
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, StyleSheet, Image, View, TextInput } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

/*
Possible option for iconLabel
  for email : "user"
  for password : "lock"
*/


const TextInputUser = (props : any) => {

  const [text, onChangeText] = React.useState('')
  
  const iconParam = {
    headerText : props.headerText || "",
    iconLabel : props.iconLabel || "user",
    isPassword : props.isPassword || false
  }

  return (
    <View
      style={{
        margin: responsiveScreenHeight(3)
      }}>
      
      <Text
        style={{
          marginBottom:responsiveScreenHeight(1),
          fontFamily: FontFamily.montserratBold,
          fontSize: responsiveScreenFontSize(1.8)
        }}
      >{iconParam.headerText}</Text>

      <View
        style={{
          backgroundColor: Color.backgroundLightGrey,
          padding: responsiveScreenHeight(1.5),
          borderRadius: responsiveScreenHeight(2),
          flexDirection: "row",
          alignItems: "center"
        }}>
          <AntDesign
            name= {iconParam.iconLabel}
            size={30}
            color="black"
            style={{
              width: "10%",
              marginLeft: "1%",
              marginRight: "3%"          
          }}/>

        <TextInput
          onChangeText={onChangeText}
          value={text}
          secureTextEntry={iconParam.isPassword}
          style={{
            backgroundColor: Color.backgroundLightGrey,
            width: "80%"
          }}/>
        
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
      padding: 10,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
  },
});

export default TextInputUser;
