import * as React from "react";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import { Margin, FontFamily, Color, FontSize } from "../GlobalStyles";

const PassengersSection = () => {
  const [num, setNum] = useState(0);
  const handleMinusPress = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const handlePlusPress = () => {
    if (num < 9) {
      setNum(num + 1);
    }
  };
  return (
    <View style={styles.numberOfPassengersParent}>
      <Text style={[styles.numberOfPassengers, styles.passengersTypo]}>
        Number of Passengers
      </Text>
      <View style={[styles.frameWrapper, styles.mt24, styles.minusIconFlexBox]}>
        <View style={styles.frameContainer}>
          <View style={[styles.passengersParent, styles.parentFlexBox]}>
            <Text style={[styles.passengers, styles.passengersTypo]}>
              Passengers
            </Text>
            <View style={[styles.frameParent, styles.parentFlexBox]}>
              <View style={styles.iconsWrapper}>
                <Pressable
                    style={[styles.iconsFlexBox, styles.iconsLayout]}
                    onPress={handleMinusPress}
                  >
                  <Image
                    style={[styles.minusIcon, styles.minusIconFlexBox]}
                    resizeMode="cover"
                    source={require("../assets/minus1.png")}
                  />
                </Pressable>
              </View>
              <Text style={[styles.text, styles.ml29, styles.iconsFlexBox]}>
                {num}
              </Text>
              <View style={[styles.iconsContainer, styles.ml29]}>
                <Pressable
                  style={[styles.icons1,styles.iconsFlexBox,styles.iconsLayout,]}
                    onPress={handlePlusPress}
                  >
                  <Image
                    style={[styles.minusIcon, styles.minusIconFlexBox]}
                    resizeMode="cover"
                    source={require("../assets/add1.png")}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml29: {
    marginLeft: Margin.m_10xl,
  },
  mt24: {
    marginTop: Margin.m_5xl,
  },
  passengersTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.textColorsMain,
  },
  minusIconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconsLayout: {
    height: 16,
    width: 16,
    justifyContent: "center",
    flexDirection: "row",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberOfPassengers: {
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  passengers: {
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: -0.2,
    lineHeight: 16,
  },
  minusIcon: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  iconsWrapper: {
    borderRadius: 8,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    padding: 6,
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.metropolisSemibold,
    textAlign: "center",
    display: "flex",
    width: 10,
    justifyContent: "center",
    color: Color.textColorsMain,
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
  },
  icons1: {
    position: "absolute",
    top: 6,
    left: 6,
  },
  iconsContainer: {
    borderRadius: 10,
    backgroundColor: Color.goldenrod_200,
    width: 28,
    height: 28,
  },
  frameParent: {
    alignItems: 'flex-end'
  },
  passengersParent: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  frameContainer: {
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 33,
    },
    shadowRadius: 213,
    elevation: 213,
    shadowOpacity: 1,
    width: 316,
    paddingLeft: 18,
    paddingTop: 16,
    paddingBottom: 16,
  },
  frameWrapper: {
    borderRadius: 24,
    borderStyle: "solid",
    borderColor: "#efeded",
    borderWidth: 1,
    flexDirection: "row",
  },
  numberOfPassengersParent: {
    paddingHorizontal: 24,
    paddingVertical: 36,
    zIndex: 1,
    alignSelf: "stretch",
  },
});

export default PassengersSection;
