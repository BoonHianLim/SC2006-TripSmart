import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const CreateAccountSection = () => {
  return (
    <View style={[styles.maskGroupParent, styles.parentPosition]}>
      <Image
        style={styles.maskGroupIcon}
        resizeMode="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={styles.rectangleParent}>
          <View style={styles.frameChild} />
          <View style={[styles.frameChild, styles.ml8_38]} />
          <View style={[styles.frameChild, styles.ml8_38]} />
        </View>
        <View style={[styles.createYourAccountWrapper, styles.mt13_4]}>
          <Text style={styles.createYourAccount}>Create Your Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8_38: {
    marginLeft: 8.38,
  },
  mt13_4: {
    marginTop: 13.4,
  },
  parentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 30,
    width: 456,
    height: 304,
    left: 0,
    position: "absolute",
  },
  frameChild: {
    borderRadius: 8376,
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    width: 25,
    height: 10,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  createYourAccount: {
    alignSelf: "stretch",
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 56,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.textColorsMain,
    textAlign: "left",
  },
  createYourAccountWrapper: {
    width: 286,
    alignItems: "center",
  },
  frameParent: {
    top: 0,
    paddingHorizontal: 20,
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: "center",
  },
  maskGroupParent: {
    top: -30,
    height: 237,
    overflow: "hidden",
  },
});

export default CreateAccountSection;
