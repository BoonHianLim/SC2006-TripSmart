import * as React from "react";
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Pressable,
  Alert,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import TextInputUser from "../components/TextInputUser";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import Login from "./Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';

const messages = {
  en,
  ch,
  ms,
  ta
};

const Register1 = () => {
  const navigation = useNavigation();
  const [checked, onChecked] = React.useState(false);
  const [email, onChangeText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const message1 = "Change Password";
  const message2 = "I accept the Terms and the Privacy Policy";
  const header1 = "Email";
  const header2 = "Old Password";
  const header3 = "New Password";
  const buttonText = "Change Password";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
          setResultText(messages.en["Change_Password_page"]);
          break;
        case 'ch':
          setResultText(messages.ch["Change_Password_page"]);
          break;
        case 'ms':
          setResultText(messages.ms["Change_Password_page"]);
          break;
        case 'ta':
          setResultText(messages.ta["Change_Password_page"]);
          break;
        default:
          setResultText(messages.en["Change_Password_page"]);
      }
    })
    }
  )
  const verifyIfCheckboxChecked = () => {
    if (checked) {
      checkExistingDatabase();
    } else {
      Alert.alert("Please agree to the terms and conditions");
    }
  };

  //Functions for handling email
  const handleEmailChange = (text: React.SetStateAction<string>) => {
    onChangeText(text);
  };

  //Functions for handling password
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    setPassword(text);
  };

  //Functions for handling password2
  const handlePassword2Change = (text: React.SetStateAction<string>) => {
    setPassword2(text);
  };

  const checkExistingDatabase = async () => {
    console.log("seeking records");
    console.log("email", email);
    try {
      const response = await fetch(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/findOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key":
              "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
          },

          body: JSON.stringify({
            dataSource: "seventh",
            database: "Account",
            collection: "People",
            filter: {
              email: email,
            },
          }),
        }
      );
      const data = await response.json();
      if (data.document == null) {
        //if data does not exist, inform that the email does not exist
        Alert.alert("Error", "Email does not exist", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      } else {
        //do update password dunction
        //check password2 and old password is not the same
        if (password2 == password) {
          Alert.alert(
            "Error",
            "New password cannot be the same as old password",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        } else if (password != data.document.password) {
          //alert that your password is incorrect
          Alert.alert("Error", "Password is incorrect", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          handleUpdate();
        }
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleUpdate = async () => {
    console.log("updating records");
    console.log("email", email);
    console.log("newPassword", password2);

    fetch(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/updateOne",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "api-key":
            "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
        },

        body: JSON.stringify({
          dataSource: "seventh",
          database: "Account",
          collection: "People",
          filter: {
            email: email,
          },
          update: {
            $set: {
              password: password2,
            },
          },
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Update successful");
        } else {
          console.log("Update failed");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}
    >
      <ImageBackground
        source={require("../assets/LoginRegisterImage/registerBackground.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            margin: responsiveScreenFontSize(3),
            marginTop: responsiveScreenHeight(15),
          }}
        >
          <View
            style={{
              marginBottom: responsiveScreenHeight(10),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(6.5),
              }}
            >
              {resultText && resultText[message1]}
            </Text>
          </View>

          <TextInputUser
            headerText={resultText && resultText[header1]}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />

          <TextInputUser
            headerText={resultText && resultText[header2]}
            iconLabel="lock"
            placeholder="Password"
            value={password}
            isPassword={true}
            onChangeText={handlePasswordChange}
          />

          <TextInputUser
            headerText={resultText && resultText[header3]}
            iconLabel="lock"
            isPassword={true}
            placeholder="Password2"
            value={password2}
            onChangeText={handlePassword2Change}
          />

          <View
            style={{
              marginBottom: responsiveScreenHeight(4),
            }}
          >
            <BouncyCheckbox
              onPress={() => onChecked(!checked)}
              textComponent={
                <Text
                  style={{
                    marginLeft: responsiveScreenFontSize(1),
                    fontFamily: FontFamily.montserratMedium,
                  }}
                >
                  {resultText && resultText[message2]}
                </Text>
              }
              size={23}
              innerIconStyle={{
                borderRadius: 3,
              }}
              iconStyle={{
                borderRadius: 3,
              }}
            />
          </View>

          <View>
            <Button
              title={resultText && resultText[buttonText]}
              loading={false}
              loadingProps={{
                size: "small",
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: Color.goldenrod_300,
                width: "100%",
                borderRadius: 5,
                padding: "3%",
              }}
              titleStyle={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(2.5),
                color: "black",
              }}
              containerStyle={{
                marginBottom: "10%",
              }}
              onPress={verifyIfCheckboxChecked}
            />
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            ></View>

            <View
              style={{
                flexDirection: "row",
              }}
            ></View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
  },
});

export default Register1;
