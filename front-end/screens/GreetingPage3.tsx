import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const GreetingPage3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.greetingPage3}>
      <View style={[styles.payment2Parent, styles.payment2ParentLayout]}>
        <Image
          style={styles.payment2Icon}
          resizeMode="cover"
          source={require("../assets/payment-2.png")}
        />
        <Text
          style={[
            styles.findTheCheapest,
            styles.findTheCheapestClr,
            styles.payment2ParentLayout,
          ]}
        >
          Find the Cheapest Rides
        </Text>
        <Text
          style={[styles.tripsmartHelpsTo, styles.findTheCheapestClr]}
        >{`TripSmart helps to sort your travel options by price and time so you get the best of both worlds! `}</Text>
      </View>
      <Pressable
        style={styles.navigationNext}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <View style={[styles.nextWrapper, styles.nextWrapperFlexBox]}>
          <Text style={styles.next}>Next</Text>
        </View>
        <View style={[styles.rectangleParent, styles.nextWrapperFlexBox]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameChild, styles.ml8_3, styles.frameLayout]} />
          <View style={[styles.frameInner, styles.ml8_3, styles.frameLayout]} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8_3: {
    marginLeft: Margin.m_4xs_3,
  },
  payment2ParentLayout: {
    width: 352,
    left: 0,
  },
  findTheCheapestClr: {
    color: Color.brandColorsNightPurple,
    textAlign: "center",
    position: "absolute",
  },
  nextWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 25,
    borderRadius: 8297,
  },
  payment2Icon: {
    left: 22,
    width: 330,
    height: 330,
    top: 0,
    position: "absolute",
  },
  findTheCheapest: {
    top: 330,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 48,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    height: 90,
    textAlign: "center",
  },
  tripsmartHelpsTo: {
    top: 434,
    left: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontFamily: FontFamily.montserratRegular,
    width: 293,
    height: 61,
    textAlign: "center",
  },
  payment2Parent: {
    top: 132,
    height: 495,
    position: "absolute",
  },
  next: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.textColorsInverse,
    width: 117,
    textAlign: "center",
  },
  nextWrapper: {
    borderRadius: 10,
    backgroundColor: Color.brandColorsNightPurple,
    paddingHorizontal: 0,
    paddingVertical: 13,
    width: 117,
    top: 0,
    left: 0,
    flexDirection: "row",
  },
  frameChild: {
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    height: 10,
  },
  frameInner: {
    backgroundColor: Color.goldenrod_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4.1,
    height: 17,
  },
  rectangleParent: {
    top: 54,
    left: 12,
    alignItems: "center",
  },
  navigationNext: {
    top: 696,
    left: 121,
    height: 71,
    width: 117,
    position: "absolute",
  },
  greetingPage3: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default GreetingPage3;
