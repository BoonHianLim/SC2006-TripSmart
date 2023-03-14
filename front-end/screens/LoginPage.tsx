import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const LoginPage = () => {
  const navigation = useNavigation();

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
                  <Text style={[styles.continueAsA, styles.loginTypo]}>
                    Continue as a Guest
                  </Text>
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
    width: 302,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    textAlign: "left",
    color: Color.textColorsMain,
  },
  frameContainer: {
    width: 338,
    height: 401,
    justifyContent: "flex-end",
  },
  tripsmart: {
    top: 156,
    left: 70,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 47,
    color: Color.brandColorsNightPurple,
    textAlign: "center",
    width: 221,
    height: 138,
    position: "absolute",
  },
  fare11: {
    top: 117,
    width: 78,
    height: 78,
  },
  frameGroup: {
    width: 254,
    height: 632,
  },
  login: {
    color: Color.textColorsInverse,
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
    top: 187,
    left: 26,
    width: 321,
    height: 606,
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
    width: "100%",
    height: 800,
    flex: 1,
  },
});

export default LoginPage;
