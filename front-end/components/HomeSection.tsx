import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LocationEditContainer from "./LocationEditContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const HomeSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.typebuttonType2primaryTParent}>
      <View
        style={[
          styles.typebuttonType2primaryT,
          styles.typebuttonType2primaryTFlexBox,
        ]}
      >
        <Text style={[styles.search, styles.whereFlexBox]}>Search</Text>
      </View>
      <View
        style={[
          styles.statefilledSearchThemelig,
          styles.typebuttonType2primaryTFlexBox,
        ]}
      >
        <Image
          style={styles.iconlylightsearch}
          resizeMode="cover"
          source={require("../assets/iconlylightsearch.png")}
        />
        <Text style={[styles.where, styles.ml11_09, styles.whereFlexBox]}>
          Where do you want to go?
        </Text>
      </View>
      <LocationEditContainer
        locationId={require("../assets/iconlyboldlocation2.png")}
        locationName="Home"
        locationCoordinates={require("../assets/iconlyboldedit2.png")}
      />
      <LocationEditContainer
        locationId={require("../assets/iconlyboldlocation3.png")}
        locationName="Work"
        locationCoordinates={require("../assets/iconlyboldedit3.png")}
        iconlyBoldEditLeft={185}
      />
      <Pressable
        style={styles.screenshot20230209At928}
        onPress={() => navigation.navigate("SearchPage2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/screenshot-20230209-at-928-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ml11_09: {
    marginLeft: 11.09,
  },
  typebuttonType2primaryTFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  whereFlexBox: {
    letterSpacing: 0,
    flex: 1,
  },
  search: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.bodyLargeBold,
    color: Color.darkDark3,
    textAlign: "center",
    textShadowColor: "rgba(254, 187, 27, 0.25)",
    textShadowOffset: {
      width: 3.6956520080566406,
      height: 7.391304016113281,
    },
    textShadowRadius: 22.17,
  },
  typebuttonType2primaryT: {
    top: 118,
    left: 22,
    borderRadius: 92,
    backgroundColor: Color.primary500,
    shadowColor: "rgba(254, 187, 27, 0.25)",
    shadowOffset: {
      width: 3.6956520080566406,
      height: 7.391304016113281,
    },
    shadowRadius: 22.17,
    elevation: 22.17,
    shadowOpacity: 1,
    width: 289,
    height: 52,
    paddingHorizontal: 15,
    paddingVertical: 17,
    justifyContent: "center",
  },
  iconlylightsearch: {
    width: 18,
    height: 18,
  },
  where: {
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemibold,
    color: Color.greyscale900,
    textAlign: "left",
  },
  statefilledSearchThemelig: {
    top: 9,
    left: 0,
    borderRadius: 11,
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    width: 333,
    height: 49,
    paddingHorizontal: 18,
    paddingVertical: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  screenshot20230209At928: {
    left: 155,
    top: 0,
    width: 30,
    height: 5,
    position: "absolute",
  },
  typebuttonType2primaryTParent: {
    top: 525,
    left: 8,
    width: 340,
    height: 170,
    position: "absolute",
  },
});

export default HomeSection;
