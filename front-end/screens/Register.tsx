import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import TextInputUser from "../components/TextInputUser";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import en from "../locales/en.json";
import ch from "../locales/ch.json";
import ms from "../locales/ms.json";
import ta from "../locales/ta.json";
import AccountController from "../controller/AccountController";

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
              onPress={()=>{
                const accountController = new AccountController("mongoDBAuth")
                const result = accountController.handleRegistration(email, password,password2, checked)
                result.then((res)=>{
                  if (res.result){
                    Alert.alert("Success", "You have successfully registered with us", [
                      {
                        text: "Bring me to log in page",
                        onPress: () => navigation.navigate("Login"),
                      },
                    ]);}
                  else if (res.reason === "duplicateEmail"){
                    Alert.alert("Error", "You have already registered with us before", [
                      {
                        text: "Log me in",
                        onPress: () => navigation.navigate("Login"),
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") },
                    ]);
                  }
                }
                ).catch((err)=>{console.log(err)})
              }}
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
