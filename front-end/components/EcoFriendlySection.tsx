import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import PetFriendlyContainer from "./PetFriendlyContainer";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const EcoFriendlySection = () => {
  return (
    <View style={[styles.frameParent, styles.mt_7, styles.frameParentFlexBox]}>
      <View style={styles.frameGroup}>
        <View style={styles.frameWrapper}>
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/wheelchair-1.png")}
            />
          </View>
        </View>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
          Wheelchair Accessibility
        </Text>
      </View>
      <PetFriendlyContainer
        petFriendlyText={require("../assets/pets-1.png")}
        ecoFriendlyText="Pet-Friendly"
      />
      <PetFriendlyContainer
        petFriendlyText={require("../assets/renewableenergy-1.png")}
        ecoFriendlyText="Eco-friendly"
        propTop={5}
        propLeft={8}
        propWidth={74}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_xs,
  },
  ml11: {
    marginLeft: Margin.m_2xs,
  },
  frameParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  wheelchair1Icon: {
    top: -1,
    left: 0,
    width: 45,
    height: 45,
    zIndex: 0,
    position: "absolute",
  },
  wheelchair1Wrapper: {
    marginTop: -22,
    marginLeft: -22,
    top: "50%",
    left: "50%",
    borderRadius: 16,
    backgroundColor: Color.textColorsInverse,
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 33,
    },
    shadowRadius: 213,
    elevation: 213,
    shadowOpacity: 1,
    padding: 2,
  },
  frameWrapper: {
    borderRadius: 24,
    backgroundColor: Color.brandColorsPeachBlossom,
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 3,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  wheelchairAccessibility: {
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.textColorsMain,
    textAlign: "center",
    width: 119,
  },
  frameGroup: {
    borderRadius: 8,
    alignItems: "center",
  },
  frameParent: {
    top: 199,
    left: 20,
    zIndex: 4,
  },
});

export default EcoFriendlySection;
