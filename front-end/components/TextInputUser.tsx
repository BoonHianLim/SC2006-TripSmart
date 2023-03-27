import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";

/*
Possible option for iconLabel
  for email : "user"
  for password : "lock"
*/

const TextInputUser = (props: any) => {
  const iconParam = {
    headerText: props.headerText || "",
    iconLabel: props.iconLabel || "user",
    isPassword: props.isPassword || false,
  };

  const [text, onChangeText] = React.useState("");
  const [show, onShow] = React.useState(iconParam.isPassword);

  const handleEmailChange = (value: string) => {
    onChangeText(value);
    if (props.onChangeText) {
      props.onChangeText(value);
    }
  };

  return (
    <View
      style={{
        marginBottom: responsiveScreenHeight(6),
      }}
    >
      <Text
        style={{
          marginBottom: responsiveScreenHeight(1),
          fontFamily: FontFamily.montserratBold,
          fontSize: responsiveScreenFontSize(1.8),
        }}
      >
        {iconParam.headerText}
      </Text>

      <View
        style={{
          backgroundColor: Color.backgroundLightGrey,
          padding: responsiveScreenHeight(1.5),
          borderRadius: responsiveScreenHeight(2),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          name={iconParam.iconLabel}
          size={30}
          color="black"
          style={{
            width: "10%",
            marginLeft: "1%",
            marginRight: "3%",
          }}
        />

        <TextInput
          onChangeText={handleEmailChange}
          value={text}
          secureTextEntry={show}
          style={{
            backgroundColor: Color.backgroundLightGrey,
            width: "75%",
          }}
          {...props.rest}
        />

        {iconParam.isPassword ? (
          <View>
            <Pressable onPress={() => onShow(!show)}>
              {show && (
                <Entypo
                  name="eye"
                  size={24}
                  color="black"
                  style={{ marginLeft: "3%" }}
                />
              )}
            </Pressable>
            <Pressable onPress={() => onShow(!show)}>
              {!show && (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color="black"
                  style={{ marginLeft: "3%" }}
                />
              )}
            </Pressable>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TextInputUser;
