import * as React from "react";
import { useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import en from "../locales/en.json";
import ch from "../locales/ch.json";
import ms from "../locales/ms.json";
import ta from "../locales/ta.json";

const messages = {
  en,
  ch,
  ms,
  ta,
};

const Register = () => {
  const navigation = useNavigation();
  const [checked, onChecked] = React.useState(false);
  const [email, onChangeText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const message1 = "Create Your Account";
  const message2 = "I accept the Terms and the Privacy Policy";
  const message3 = "Already have an account?";
  const message4 = "Sign in";
  const header1 = "Email";
  const header2 = "Password";
  const header3 = "Re-type Password";
  const buttonText = "Sign Up";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch (value) {
        case "en":
          setResultText(messages.en["Sign_up_page"]);
          break;
        case "ch":
          setResultText(messages.ch["Sign_up_page"]);
          break;
        case "ms":
          setResultText(messages.ms["Sign_up_page"]);
          break;
        case "ta":
          setResultText(messages.ta["Sign_up_page"]);
          break;
        default:
          setResultText(messages.en["Sign_up_page"]);
      }
    });
  });

  const verifyIfCheckboxChecked = () => {
    if (checked) {
      checkExistingDatabase();
    } else {
      Alert.alert("Please agree to the terms and conditions");
    }
  };

  //Functions for handling email
  const handleEmailChange = (text: React.SetStateAction<string>) => {
    console.log("email: ", text);
    onChangeText(text);
  };

  //Functions for handling password
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    console.log("password: ", text);
    setPassword(text);
  };

  //Functions for handling password2
  const handlePassword2Change = (text: React.SetStateAction<string>) => {
    console.log("password2: ", text);
    setPassword2(text);
  };

  const checkExistingDatabase = async () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log("seeking records");
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
      console.log("email is: ", email);
      if (data.document == null) {
        if (password != password2) {
          Alert.alert("Error", "Passwords do not match", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
        //validate password
        else if (password.length < 12 || !/[a-zA-Z]/.test(password)) {
          Alert.alert(
            "Error",
            "Passwords must be at least 12 digits and contain alphabetical letter",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        } else if (!reg.test(email)) {
          Alert.alert("Error", "Invalid email format", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          handleSignup();
        }
      }
      //validate email
      else {
        //alert user that email or password is already in database
        Alert.alert("Error", "You have already registered with us before", [
          {
            text: "Log me in",
            onPress: () => navigation.navigate("Login"),
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (err) {
      console.log("error signing in: ", err);
    }
  };

  const handleSignup = async () => {
    console.log("trying to add records into the database");
    // perform login action here using email and password
    // mongodb api here
    try {
      const response = await fetch(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/insertOne",
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
            document: {
              email: email,
              password: password,
            },
          }),
        }
      );
      const data = await response.json();

      //tell user of the successful registration

      Alert.alert("Success", "You have successfully registered with us", [
        {
          text: "Bring me to log in page",
          onPress: () => navigation.navigate("Login"),
        },
      ]);
    } catch (err) {
      console.log("error signing in: ", err);
    }
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
            >
              <Text
                style={{
                  fontFamily: FontFamily.montserratMedium,
                  fontSize: responsiveScreenFontSize(1.5),
                }}
              >
                {resultText && resultText[message3]}{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    fontFamily: FontFamily.montserratMedium,
                    fontSize: responsiveScreenFontSize(1.5),
                  }}
                >
                  {resultText && resultText[message4]}
                </Text>
              </Pressable>
            </View>
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

export default Register;
