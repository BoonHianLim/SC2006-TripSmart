//use email: abc@gmail.com
//use password: abc
//to login
import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  SafeAreaView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //Functions for handling email, password and login
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleLogin = async () => {
    console.log("looking for records from database");
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
        console.log("exists in database, proceed to redirect to next page");
        navigation.navigate("SearchPage1");
      } else {
        console.log("does not exist in database, show error message");
      }
    } catch (err) {
      console.log("error signing in: ", err);
    }
  };

  return (
    <View style={styles.login}>
      <View style={[styles.loginInner, styles.loginInnerPosition]}>
        <View style={[styles.maskGroupParent, styles.maskGroupPosition]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            resizeMode="cover"
            source={require("../assets/mask-group.png")}
          />
          <View style={[styles.frameParent, styles.frameSpaceBlock]}>
            <View style={[styles.fare13Wrapper, styles.iconsWrapperFlexBox]}>
              <Image
                style={styles.fare13}
                resizeMode="cover"
                source={require("../assets/fare-1-31.png")}
              />
            </View>
            <View style={[styles.signInWithPasswordParent, styles.mt14_84]}>
              <Text
                style={[
                  styles.signInWith,
                  styles.signInWithFlexBox,
                  styles.emailTypo,
                ]}
              >
                Sign In with Password
              </Text>
              <Text
                style={[
                  styles.continueToYour,
                  styles.mt11_13,
                  styles.signInWithFlexBox,
                ]}
              >
                Continue to your Account
              </Text>
            </View>
          </View>
          <View style={[styles.frameGroup, styles.frameSpaceBlock]}>
            <View style={styles.loginInnerPosition}>
              <View style={styles.frameContainer}>
                <View style={styles.frameContainer}>
                  <Text style={[styles.email, styles.emailTypo]}>Email</Text>
                  <View style={styles.textInputContainer}>
                    {/* An Input for email address */}
                    <TextInput
                      style={styles.textInput}
                      placeholder="Email"
                      keyboardType="email-address"
                      value={email}
                      onChangeText={handleEmailChange}
                    />
                  </View>

                  <Text
                    style={[styles.email, styles.emailTypo, { marginTop: 30 }]}
                  >
                    Password
                  </Text>
                  <View style={styles.textInputContainer}>
                    {/* An input for password */}
                    <TextInput
                      style={styles.textInput}
                      placeholder="Password"
                      secureTextEntry={true}
                      value={password}
                      onChangeText={handlePasswordChange}
                    />
                  </View>

                  <Button title="Login" onPress={handleLogin} />
                  <View style={[styles.frameParent1, styles.mt14_84]}>
                    <View style={styles.iconsWrapper}>
                      <View
                        style={[styles.iconsLayout, styles.iconsWrapperFlexBox]}
                      ></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.frameParent5, styles.mt25_98]}>
              <Pressable
                style={[
                  styles.logInWrapper,
                  styles.frameLayout,
                  styles.iconsWrapperFlexBox,
                ]}
                onPress={() => navigation.navigate("SearchPage1")}
              >
                <Text style={[styles.logIn, styles.emailTypo]}>Log In</Text>
              </Pressable>
              <View style={[styles.vectorParent, styles.mt25_98]}>
                <Image
                  style={[styles.vectorIcon, styles.iconLayout1]}
                  resizeMode="cover"
                  source={require("../assets/vector-948.png")}
                />
                <Text
                  style={[
                    styles.forgetYourPassword,
                    styles.ml14_84,
                    styles.emailTypo,
                  ]}
                >
                  Forgot Password?
                </Text>
                <Image
                  style={[
                    styles.vectorIcon,
                    styles.ml14_84,
                    styles.iconLayout1,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/vector-949.png")}
                />
              </View>
            </View>
            <Text
              style={[
                styles.poweredByTripsmart,
                styles.mt25_98,
                styles.emailTypo,
              ]}
            >
              Powered by TripSmart 2023
            </Text>
            <Text
              style={[
                styles.dontHaveAnContainer,
                styles.mt25_98,
                styles.orContinueWithTypo,
              ]}
            >
              <Text style={styles.dontHaveAn}>{`Dont have an account? `}</Text>
              <Text style={styles.signUp}>Sign Up</Text>
            </Text>
            <Image
              style={[styles.facebook1Icon, styles.mt25_98, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/facebook-1.png")}
            />
            <Image
              style={[styles.google1Icon, styles.mt25_98, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/google-1.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.orContinueWith, styles.orContinueWithTypo]}>
        or continue with
      </Text>
    </View>
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
