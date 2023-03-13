import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import EmailContainer from "./EmailContainer";
import { Color, FontFamily } from "../GlobalStyles";

const ReTypePasswordContainer = () => {
  return (
    <View style={styles.frameWrapper}>
      <View style={styles.frameParent}>
        <View style={styles.frameParent}>
          <View style={styles.frameParent}>
            <Text
              style={[
                styles.email,
                styles.emailClr,
                styles.emailTypo,
                styles.emailLayout,
              ]}
            >
              Email
            </Text>
            <View
              style={[
                styles.frameContainer,
                styles.mt12_02,
                styles.wrapperFlexBox,
              ]}
            >
              <View style={[styles.iconsWrapper, styles.wrapperFlexBox]}>
                <View style={[styles.iconsFlexBox, styles.iconsLayout]}>
                  <Image
                    style={styles.iconLayout}
                    resizeMode="cover"
                    source={require("../assets/user3.png")}
                  />
                </View>
              </View>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/vector-9462.png")}
              />
              <View
                style={[
                  styles.jasonlin003entuedusgWrapper,
                  styles.wrapperFlexBox,
                ]}
              >
                <Text style={[styles.jasonlin003entuedusg, styles.emailLayout]}>
                  Jasonlin003@e.ntu.edu.sg
                </Text>
              </View>
            </View>
          </View>
          <EmailContainer
            passwordInput="Password"
            passwordConfirmationInput={require("../assets/lock1.png")}
            passwordHashInput={require("../assets/vector-9463.png")}
            passwordSaltInput={require("../assets/eye1.png")}
          />
          <EmailContainer
            passwordInput="Re-type Password"
            passwordConfirmationInput={require("../assets/lock2.png")}
            passwordHashInput={require("../assets/vector-9464.png")}
            passwordSaltInput={require("../assets/eye2.png")}
          />
        </View>
        <View style={[styles.wrapperFlexBox, styles.mt27_04]}>
          <View
            style={[styles.checkbox, styles.iconsFlexBox, styles.iconsLayout]}
          >
            <View style={[styles.icons1, styles.iconsFlexBox]}>
              <Image
                style={[styles.checkmarkIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/checkmark1.png")}
              />
            </View>
          </View>
          <View style={[styles.iAcceptTheTermsAndThePriWrapper, styles.ml9_01]}>
            <Text style={[styles.iAcceptTheContainer, styles.emailClr]}>
              <Text style={styles.iAcceptThe}>{`I accept the `}</Text>
              <Text style={styles.emailTypo}>Terms</Text>
              <Text style={styles.iAcceptThe}>{` and the `}</Text>
              <Text style={styles.emailTypo}>Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12_02: {
    marginTop: 12.02,
  },
  mt27_04: {
    marginTop: 27.04,
  },
  ml9_01: {
    marginLeft: 9.01,
  },
  emailClr: {
    color: Color.textColorsLight,
    textAlign: "left",
  },
  emailTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  emailLayout: {
    lineHeight: 12,
    fontSize: 12,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsLayout: {
    height: 21,
    width: 21,
    justifyContent: "center",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    flex: 1,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  email: {
    letterSpacing: 0.2,
    textAlign: "left",
  },
  iconsWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 2,
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  jasonlin003entuedusg: {
    color: Color.textColorsMain,
    display: "none",
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
  },
  jasonlin003entuedusgWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignSelf: "stretch",
  },
  frameContainer: {
    borderRadius: 12,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    height: 45,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  checkmarkIcon: {
    display: "none",
  },
  icons1: {
    width: 12,
    height: 12,
    display: "none",
  },
  checkbox: {
    borderRadius: 8,
    backgroundColor: Color.darkorange,
    borderStyle: "solid",
    borderColor: "#ffd699",
    borderWidth: 1.5,
  },
  iAcceptThe: {
    fontFamily: FontFamily.montserratRegular,
  },
  iAcceptTheContainer: {
    fontSize: 11,
    lineHeight: 10,
    width: 226,
    textAlign: "left",
  },
  iAcceptTheTermsAndThePriWrapper: {
    flexDirection: "row",
  },
  frameWrapper: {
    position: "absolute",
    top: 186,
    left: 18,
    width: 323,
    height: 261,
    paddingLeft: 18,
    paddingTop: 27,
    paddingRight: 27,
    paddingBottom: 27,
  },
});

export default ReTypePasswordContainer;
