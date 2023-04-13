//use email: abc@gmail.com
//use password: abc
//case sensitive
//to login
import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TextInputUser from "../components/TextInputUser";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Button } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
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

const Login = () => {
  const navigation = useNavigation();
  const [checked, onChecked] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const message1 = "Sign In";
  const message2 = "Continue to your account";
  const message3 = "Remember me";
  const message4 = "Or continue with";
  const message5 = "Don't have an account?";
  const message6 = "Register now";
  const header1 = "Email";
  const header2 = "Password";
  const buttonText1 = "Log In";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch (value) {
        case "en":
          setResultText(messages.en["Login_page"]);
          break;
        case "ch":
          setResultText(messages.ch["Login_page"]);
          break;
        case "ms":
          setResultText(messages.ms["Login_page"]);
          break;
        case "ta":
          setResultText(messages.ta["Login_page"]);
          break;
        default:
          setResultText(messages.en["Login_page"]);
      }
    });
  });

  //Functions to set status as User
  const storeData = async (text: React.SetStateAction<string>) => {
    try {
      await AsyncStorage.setItem("@storage_Key", "User");
    } catch (e) {
      // saving error
    }
  };

  const storeEmail = async (text: React.SetStateAction<string>) => {
    try {
      await AsyncStorage.setItem("@storage_Email", email);
    } catch (e) {
      // saving error
    }
  };

  //Functions for handling email, password and login
  const handleEmailChange = (text: React.SetStateAction<string>) => {
    //console.log("email: ", text);
    setEmail(text);
  };
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    //console.log("password: ", text);
    setPassword(text);
  };
  const handleLogin = async () => {
    //console.log("looking for records from database");
    // perform login action here using email and password
    // mongodb api here
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
              password: password,
            },
          }),
        }
      );
      const data = await response.json();
      if (data.document != null) {
        storeData("User");
        storeEmail(email);
        navigation.navigate("ResultList");
      } else {
        if (email.length == 0 || password.length == 0) {
          Alert.alert("Error", "Please fill in all the fields", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          Alert.alert("Error", "Email or password is incorrect", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      }
    } catch (err) {
      console.log("error signing in: ", err);
    }
  };

  return (
    <ScrollView
      style={{
        flexGrow: 1,
        backgroundColor: "white",
      }}
    >
      <ImageBackground
        source={require("../assets/mask-group.png")}
        style={{
          width: "100%",
          height: "50%",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: "3%",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: responsiveScreenHeight(12),
              height: responsiveScreenHeight(12),
              marginTop: "20%",
            }}
            resizeMode="cover"
            source={require("../assets/fare-1-31.png")}
          />

          <Text
            style={{
              fontFamily: FontFamily.montserratBold,
              fontSize: responsiveScreenFontSize(4),
              color: "black",
              textAlign: "center",
              marginBottom: "3%",
            }}
          >
            {resultText && resultText[message1]}
          </Text>

          <Text
            style={{
              fontFamily: FontFamily.montserratMedium,
              fontSize: responsiveScreenFontSize(2),
              color: "black",
              textAlign: "center",
              marginBottom: "5%",
            }}
          >
            {resultText && resultText[message2]}
          </Text>

          <View
            style={{
              margin: "5%",
            }}
          >
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
            <View
              style={{
                marginBottom: "5%",
              }}
            ></View>

            <Button
              title={resultText && resultText[buttonText1]}
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
                marginBottom: "2%",
              }}
              onPress={() => {
                const accountController = new AccountController("mongoDBAuth")
                const result = accountController.handleLogin(email, password)
                result.then((res)=>{
                  if (res){
                    storeData("User");
                    storeEmail(email);
                    navigation.navigate("ResultList");}
                    else {
                      //alert user that email or password is incorrect
                      Alert.alert("Error", "Email or password is incorrect", [
                        { text: "OK", onPress: () => console.log("OK Pressed") },
                      ]);
                    }
                }
                ).catch((err)=>{console.log(err)})
              }}
            />
            {/*<Button
              title="Temporary: Login without password"
              onPress={() => {
                navigation.navigate("ResultList");
                storeData("User");
              }}
            />*/}
          </View>
          <Pressable></Pressable>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.montserratMedium,
                fontSize: responsiveScreenFontSize(2),
              }}
            >
              {resultText && resultText[message4]}
            </Text>

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
                {resultText && resultText[message5]}{" "}
              </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{
                    fontFamily: FontFamily.montserratMedium,
                    fontSize: responsiveScreenFontSize(1.5),
                  }}
                >
                  {resultText && resultText[message6]}
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
  mt11_13: {
    marginTop: 11.13,
  },
  mt14_84: {
    marginTop: 14.84,
  },
  ml7_42: {
    marginLeft: 7.42,
  },
  ml11_13: {
    marginLeft: 11.13,
  },
  mt22_27: {
    marginTop: 22.27,
  },
  ml14_84: {
    marginLeft: 14.84,
  },
  mt25_98: {
    marginTop: 25.98,
  },
  loginInnerPosition: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  maskGroupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameSpaceBlock: {
    paddingBottom: 45,
    paddingHorizontal: 22,
    alignItems: "center",
    position: "absolute",
  },
  iconsWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  signInWithFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  emailTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  frameLayout: {
    borderRadius: 15,
    alignSelf: "stretch",
  },
  userIconLayout: {
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  frameParent3SpaceBlock: {
    paddingVertical: 9,
    paddingHorizontal: 19,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  checkboxFlexBox: {
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsLayout: {
    height: 26,
    width: 26,
    flexDirection: "row",
  },
  orContinueWithTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: 15,
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    height: 53,
    width: 53,
    top: 412,
    position: "absolute",
  },
  maskGroupIcon: {
    width: 520,
    height: 337,
  },
  fare13: {
    width: 72,
    height: 72,
  },
  fare13Wrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  signInWith: {
    fontSize: 26,
    letterSpacing: -0.2,
    lineHeight: 35,
    color: Color.textColorsMain,
  },
  continueToYour: {
    letterSpacing: 0.1,
    lineHeight: 24,
    color: Color.textColorsLight,
    fontFamily: FontFamily.montserratRegular,
    fontSize: 15,
  },
  signInWithPasswordParent: {
    width: 317,
    alignItems: "center",
  },
  frameParent: {
    top: 7,
    left: 8,
    width: 399,
    paddingTop: 89,
    alignItems: "center",
  },
  email: {
    letterSpacing: 0.3,
    textAlign: "left",
    lineHeight: 14,
    color: Color.textColorsLight,
    fontSize: 15,
    alignSelf: "stretch",
  },
  userIcon: {
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconsWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 3,
  },
  jasonlin002entuedusg: {
    display: "none",
    textAlign: "left",
    lineHeight: 14,
    fontFamily: FontFamily.montserratRegular,
    fontSize: 15,
    color: Color.textColorsMain,
  },
  jasonlin002entuedusgWrapper: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameView: {
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  frameInner: {
    borderRadius: 9277,
    backgroundColor: Color.textColorsMain,
    width: 7,
    height: 7,
    display: "none",
  },
  rectangleParent: {
    flexDirection: "row",
  },
  frameParent3: {
    flex: 1,
  },
  icons3: {
    width: 15,
    height: 15,
    flexDirection: "row",
  },
  checkbox: {
    borderRadius: 9,
    backgroundColor: Color.darkorange,
    borderColor: "#ffd699",
    borderWidth: 1.9,
  },
  rememberMe: {
    fontSize: 14,
    lineHeight: 13,
    textAlign: "left",
    color: Color.textColorsLight,
    fontFamily: FontFamily.montserratRegular,
  },
  checkboxParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent1: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  logIn: {
    fontSize: 22,
    letterSpacing: 0.7,
    lineHeight: 22,
    color: Color.black,
    textAlign: "left",
  },
  logInWrapper: {
    backgroundColor: Color.primary500,
    paddingHorizontal: 9,
    paddingVertical: 19,
    flexDirection: "row",
  },
  vectorIcon: {
    borderRadius: 1,
    height: 1,
  },
  forgetYourPassword: {
    fontSize: 16,
    color: Color.textColorsLighter,
    lineHeight: 15,
    textAlign: "left",
  },
  vectorParent: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent5: {
    zIndex: 1,
    alignSelf: "stretch",
  },
  poweredByTripsmart: {
    top: 554,
    left: 80,
    fontSize: 13,
    letterSpacing: 0.4,
    lineHeight: 12,
    zIndex: 2,
    textAlign: "left",
    color: Color.textColorsLight,
    position: "absolute",
    fontWeight: "700",
  },
  dontHaveAn: {
    color: "rgba(64, 64, 64, 0.5)",
  },
  signUp: {
    color: Color.goldenrod_300,
  },
  dontHaveAnContainer: {
    top: 492,
    left: 40,
    width: 259,
    height: 13,
    zIndex: 3,
    lineHeight: 14,
  },
  facebook1Icon: {
    left: 86,
    zIndex: 4,
  },
  google1Icon: {
    left: 200,
    zIndex: 5,
  },
  frameGroup: {
    top: 276,
    left: 40,
    height: 456,
    alignItems: "center",
    width: 334,
  },
  maskGroupParent: {
    height: 742,
    width: 334,
  },
  loginInner: {
    flex: 1,
  },
  orContinueWith: {
    marginTop: 256,
    marginLeft: -76,
    top: "47%",
    left: "50%",
    width: 147,
    height: 12,
    lineHeight: 15,
    zIndex: 1,
    color: Color.textColorsLight,
  },
  login: {
    backgroundColor: Color.textColorsInverse,
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInputContainer: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  textInput: {
    height: 40,
  },
});

export default Login;
