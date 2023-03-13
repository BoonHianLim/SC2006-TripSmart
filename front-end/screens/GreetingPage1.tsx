import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const GreetingPage1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.greetingPage1}>
      <View style={styles.greetingPage1Child} />
      <Image
        style={[
          styles.adrienUwlsnmrmo0aUnsplash1Icon,
          styles.nextWrapperPosition,
        ]}
        resizeMode="cover"
      />
      <View style={styles.welcomeToTripsmartParent}>
        <Text
          style={[
            styles.welcomeToTripsmartContainer,
            styles.theBestTripPlanningTypo,
          ]}
        >
          <Text style={styles.welcomeToTripsmartContainer1}>
            <Text style={styles.welcomeTo}>{`Welcome to 
`}</Text>
            <Text style={styles.tripsmart}>TripSmart</Text>
          </Text>
        </Text>
        <Text
          style={[
            styles.theBestTripPlanning,
            styles.mt7_64,
            styles.theBestTripPlanningTypo,
          ]}
        >
          The best trip-planning app in Singapore that makes commuting more
          stress-free and accessible for everyone!
        </Text>
      </View>
      <View style={styles.navigationNext}>
        <Pressable
          style={[
            styles.nextWrapper,
            styles.nextWrapperFlexBox,
            styles.nextWrapperPosition,
          ]}
          onPress={() => navigation.navigate("GreetingPage2")}
        >
          <Text style={styles.next}>Next</Text>
        </Pressable>
        <View style={[styles.rectangleParent, styles.nextWrapperFlexBox]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.ml8_3, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.ml8_3, styles.frameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt7_64: {
    marginTop: 7.64,
  },
  ml8_3: {
    marginLeft: Margin.m_4xs_3,
  },
  nextWrapperPosition: {
    left: 0,
    top: 0,
  },
  theBestTripPlanningTypo: {
    textShadowRadius: 3.39,
    textShadowOffset: {
      width: 0,
      height: 3.394230842590332,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontWeight: "700",
  },
  nextWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 25,
    borderRadius: 8297,
  },
  greetingPage1Child: {
    top: 767,
    left: 23,
    width: 430,
    height: 1,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  adrienUwlsnmrmo0aUnsplash1Icon: {
    width: 711,
    height: 1067,
    position: "absolute",
  },
  welcomeTo: {
    fontSize: 30,
    color: Color.textColorsInverse,
  },
  tripsmart: {
    fontSize: 58,
    color: Color.brandColorsCrayolaYellow,
  },
  welcomeToTripsmartContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  welcomeToTripsmartContainer: {
    fontFamily: FontFamily.montserratBold,
    display: "flex",
    width: 331,
    height: 85,
    alignItems: "center",
  },
  theBestTripPlanning: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: FontFamily.montserratAlternatesBold,
    width: 353,
    color: Color.textColorsInverse,
  },
  welcomeToTripsmartParent: {
    top: 533,
    left: 17,
    position: "absolute",
  },
  next: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    textAlign: "center",
    width: 117,
    color: Color.textColorsInverse,
  },
  nextWrapper: {
    borderRadius: 10,
    backgroundColor: Color.brandColorsNightPurple,
    paddingHorizontal: 0,
    paddingVertical: 13,
    width: 117,
  },
  frameChild: {
    backgroundColor: Color.goldenrod_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4.1,
    height: 17,
  },
  frameItem: {
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    height: 10,
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
  greetingPage1: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default GreetingPage1;
