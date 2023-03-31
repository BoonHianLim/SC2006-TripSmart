import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Color, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  const process = () => {
    storeData("Guest");
    navigation.navigate("SearchPage1");
  };

  const storeData = async (text: React.SetStateAction<string>) => {
    try {
      await AsyncStorage.setItem("@storage_Key", "Guest");
    } catch (e) {
      // saving error
    }
  };

  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  console.log("width:", width);

  return (
    <View style={[styles.loginPage, styles.loginPageBg]}>
      <View style={styles.loginPageInner}>
        <View style={[styles.dk011Parent, styles.loginPageBg]}>
          <Image
            style={[
              styles.dk011Icon,
              styles.fare11Position,
              styles.dk011IconPosition,
            ]}
            resizeMode="cover"
            source={require("../assets/dk01-1.png")}
          />
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View
                style={[
                  styles.frameContainer,
                  styles.fare11Position,
                  styles.dk011IconPosition,
                ]}
              >
                <View style={styles.frameFlexBox}>
                  <Text style={styles.hereToMeet}>
                    Here to meet all your travel needs
                  </Text>
                  <Text style={[styles.feelTheEase, styles.mt12_65]}>
                    Feel the ease of picking a transport option of your choice
                    from the comfort of your own home and find the best offers
                    in SG with us!
                  </Text>
                </View>
                <View style={styles.frameFlexBox} />
              </View>
              <Text style={[styles.tripsmart, styles.loginTypo1]}>
                TripSmart
              </Text>
              <Image
                style={[styles.fare11, styles.fare11Position]}
                resizeMode="cover"
                source={require("../assets/fare-1-1.png")}
              />
            </View>
            <View style={[styles.frameView, styles.mt_188]}>
              <View style={styles.frameParent1}>
                <Pressable
                  style={[styles.loginWrapper, styles.wrapperFlexBox]}
                  onPress={() => navigation.navigate("Login")}
                >
                  <Text
                    style={[styles.login, styles.loginTypo, styles.loginTypo1]}
                  >
                    Login
                  </Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.signUpWrapper,
                    styles.mt16,
                    styles.wrapperFlexBox,
                  ]}
                  onPress={() => navigation.navigate("Register1")}
                >
                  <Text style={[styles.signUp, styles.loginTypo]}>Sign Up</Text>
                </Pressable>
              </View>
              <View
                style={[styles.frameWrapper, styles.mt28, styles.frameFlexBox]}
              >
                <View style={styles.continueAsAGuestWrapper}>
                  <Pressable onPress={() => process()}>
                    <Text
                      style={[
                        styles.continueAsGuest_color,
                        styles.loginTypo,
                        styles.loginTypo1,
                      ]}
                    >
                      Continue as a Guest
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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
