import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import PetFriendlyContainer from "./PetFriendlyContainer";
import { useState } from "react";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const EcoFriendlySection = () => {
  const { width, height } = Dimensions.get("window");
  const [isWCSelected, setWCSelected] = useState(false);
  const handleWCPress = () => {
    setWCSelected(!isWCSelected); // toggle isSelected between true and false
  };
  const [isPSelected, setPSelected] = useState(false);
  const handlePPress = () => {
    setPSelected(!isPSelected); // toggle isSelected between true and false
  };
  const [isEFSelected, setEFSelected] = useState(false);
  const handleEFPress = () => {
    setEFSelected(!isEFSelected); // toggle isSelected between true and false
  };
  return (
    <View style={[styles.frameParent, styles.frameParentFlexBox]}>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, isWCSelected ? styles.frameSelected : null]} onPress={handleWCPress}>
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/wheelchair-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
          Wheelchair Accessibility
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, isPSelected ? styles.frameSelected : null]} onPress={handlePPress}>
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/pets-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
        Pet-Friendly
        </Text>
      </View>
      <View style={styles.frameGroup}>
        <Pressable style={[styles.frameWrapper, isEFSelected ? styles.frameSelected : null]} onPress={handleEFPress}>
          <View style={[styles.wheelchair1Wrapper, styles.frameParentFlexBox]}>
            <Image
              style={styles.wheelchair1Icon}
              resizeMode="cover"
              source={require("../assets/renewableenergy-1.png")}
            />
          </View>
        </Pressable>
        <Text style={[styles.wheelchairAccessibility, styles.mt12]}>
        Eco-friendly
        </Text>
      </View>
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
    position: "relative",
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
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  frameSelected: {
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 3,
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default EcoFriendlySection;
