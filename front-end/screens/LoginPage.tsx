import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color, FontFamily } from "../GlobalStyles";
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Button } from "@rneui/themed";

const LoginPage = () => {
  const process = () => {
    storeData("Guest");
    navigation.navigate("ResultList");
  };

  const storeData = async (text: React.SetStateAction<string>) => {
    try {
      await AsyncStorage.setItem("@storage_Key", "Guest");
    } catch (e) {
      // saving error
    }
  };

  //reset localstorage
  const resetLocalStorage = async () => {
    try {
      await AsyncStorage.setItem("@storage_Key", "Guest");
      await AsyncStorage.setItem("@storage_Email", "");
    } catch (e) {
      // saving error
    }
  };

  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  console.log("width:", width);

  return (
    resetLocalStorage(),
    (
      <View
        style={{
          backgroundColor: Color.brandColorsCrayolaYellow,
        }}
      >
        <ImageBackground
          source={require("../assets/dk01-1.png")}
          style={{
            width: "100%",
            height: "100%",
            // alignItems: "center",
            // justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              margin: "10%",
              marginTop: responsiveScreenFontSize(22),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: responsiveScreenHeight(10),
                  width: responsiveScreenHeight(10),
                }}
                resizeMode="cover"
                source={require("../assets/fare-1-1.png")}
              />
              <Text
                style={{
                  fontFamily: FontFamily.montserratBold,
                  fontSize: responsiveScreenFontSize(4.5),
                  marginLeft: "3%",
                  marginTop: "10%",
                }}
              >
                TripSmart
              </Text>
            </View>

            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(3.5),
                marginBottom: "3%",
              }}
            >
              Here to meet all your travel needs{" "}
            </Text>

            <Text
              style={{
                fontFamily: FontFamily.montserratMedium,
                fontSize: responsiveScreenFontSize(1.8),
                marginBottom: "10%",
              }}
            >
              Feel the ease of picking a transport option of your choice from
              the comfort of your own home and find the best offers in SG with
              us!
            </Text>
            <Button
              title="Login"
              loading={false}
              loadingProps={{
                size: "small",
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: "black",
                width: "100%",
                borderRadius: 20,
                padding: "6%",
              }}
              titleStyle={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(2.5),
                color: "white",
              }}
              containerStyle={{
                marginBottom: "5%",
              }}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />

            <Button
              title="Sign Up"
              loading={false}
              loadingProps={{
                size: "small",
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: Color.goldenrod_300,
                width: "100%",
                borderRadius: 20,
                padding: "6%",
              }}
              titleStyle={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(2.5),
                color: "black",
              }}
              containerStyle={{
                marginBottom: "5%",
              }}
              onPress={() => {
                navigation.navigate("Register1");
              }}
            />
            <Pressable
              style={{
                alignItems: "center",
              }}
              onPress={() => process()}
            >
              <Text
                style={{
                  fontFamily: FontFamily.montserratMedium,
                  fontSize: responsiveScreenFontSize(2.0),
                }}
              >
                Continue as Guest
              </Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  mt12_65: {
    marginTop: 12.65,
  },
  mt16: {
    marginTop: 16,
  },
  mt28: {
    marginTop: 28,
  },
  mt_188: {
    marginTop: -188,
  },
  loginPageBg: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    flex: 1,
  },
  fare11Position: {
    left: 0,
    position: "absolute",
  },
  dk011IconPosition: {
    top: 0,
    left: 0,
  },
  loginTypo1: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  wrapperFlexBox: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  loginTypo: {
    letterSpacing: 0.6,
    fontSize: 20,
    lineHeight: 20,
    textAlign: "left",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignSelf: "stretch",
  },
  dk011Icon: {
    width: 505,
    height: 622,
  },
  hereToMeet: {
    fontSize: 32,
    letterSpacing: -0.3,
    lineHeight: 37,
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  feelTheEase: {
    fontSize: 13,
    letterSpacing: 0.1,
    width: Dimensions.get("window").width * 0.7,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    textAlign: "left",
    color: Color.textColorsMain,
  },
  frameContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.44,
    justifyContent: "flex-end",
  },
  tripsmart: {
    top: Dimensions.get("window").height * 0.18,
    left: Dimensions.get("window").width * 0.2,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 47,
    color: Color.brandColorsNightPurple,
    textAlign: "center",
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").height * 0.1,
    position: "absolute",
  },
  fare11: {
    top: Dimensions.get("window").height * 0.16,
    width: Dimensions.get("window").width * 0.16,
    height: Dimensions.get("window").height * 0.08,
  },
  frameGroup: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").height * 0.7,
  },
  login: {
    color: Color.textColorsInverse,
  },
  continueAsGuest_color: {
    color: Color.black,
  },
  loginWrapper: {
    backgroundColor: Color.brandColorsNightPurple,
  },
  signUp: {
    color: Color.textColorsMain,
    letterSpacing: 0.6,
    fontSize: 20,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  signUpWrapper: {
    backgroundColor: Color.darkorange,
  },
  frameParent1: {
    alignSelf: "stretch",
  },
  continueAsA: {
    color: "#795000",
    fontFamily: FontFamily.montserratRegular,
  },
  continueAsAGuestWrapper: {
    flexDirection: "row",
  },
  frameWrapper: {
    padding: 10,
    alignItems: "center",
  },
  frameView: {
    paddingLeft: 24,
    paddingTop: 36,
    paddingBottom: 36,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent: {
    top: Dimensions.get("window").height * 0.1,
    left: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.8,
    alignItems: "center",
    position: "absolute",
  },
  dk011Parent: {
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  loginPageInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  loginPage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flex: 1,
  },
});

export default LoginPage;
