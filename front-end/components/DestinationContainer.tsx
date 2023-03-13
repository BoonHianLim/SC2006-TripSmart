import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const DestinationContainer = () => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.symbolParent}>
        <View style={styles.symbolLayout}>
          <LinearGradient
            style={[styles.subtract, styles.symbolLayout]}
            locations={[0, 0.51, 1]}
            colors={["#ff9f40", "#ffa851", "#ffc286"]}
          >
            <View style={[styles.subtractChild, styles.childLayout]} />
            <View style={[styles.subtractItem, styles.childLayout]} />
          </LinearGradient>
          <LinearGradient
            style={[styles.symbolChild, styles.childLayout]}
            locations={[0, 0.51, 1]}
            colors={["#ff9f40", "#ffa851", "#ffc286"]}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.mt6, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-1.png")}
        />
        <View style={[styles.symbolLayout, styles.mt6]}>
          <LinearGradient
            style={[styles.subtract, styles.symbolLayout]}
            locations={[0, 0.51, 1]}
            colors={["#ff9f40", "#ffa851", "#ffc286"]}
          >
            <View style={[styles.subtractChild, styles.childLayout]} />
            <View style={[styles.subtractItem, styles.childLayout]} />
          </LinearGradient>
          <LinearGradient
            style={[styles.symbolChild, styles.childLayout]}
            locations={[0, 0.51, 1]}
            colors={["#ff9f40", "#ffa851", "#ffc286"]}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.ml12]}>
        <View style={styles.frameContainer}>
          <View style={styles.frameView}>
            <View style={styles.iconsWrapper}>
              <View style={[styles.icons, styles.iconsFlexBox1]}>
                <Image
                  style={[styles.trackingIcon, styles.frameChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/tracking.png")}
                />
              </View>
            </View>
            <Text
              style={[styles.pickupLocation, styles.ml8, styles.hvorSkalDuTypo]}
            >
              Pickup Location
            </Text>
          </View>
          <View style={[styles.icons1, styles.iconsFlexBox]}>
            <Image
              style={[styles.trackingIcon, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/close.png")}
            />
          </View>
        </View>
        <View style={[styles.frameContainer, styles.mt12]}>
          <View style={[styles.frameParent1, styles.iconsFlexBox1]}>
            <View>
              <View style={[styles.icons, styles.iconsFlexBox1]}>
                <Image
                  style={[styles.trackingIcon, styles.frameChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/location-pin.png")}
                />
              </View>
            </View>
            <View style={[styles.hvorSkalDuHenWrapper, styles.ml8]}>
              <Text style={[styles.hvorSkalDu, styles.hvorSkalDuTypo]}>
                Hvor skal du hen?
              </Text>
            </View>
          </View>
          <View style={styles.iconsFlexBox}>
            <Image
              style={[styles.trackingIcon, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/switch.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt6: {
    marginTop: Margin.m_7xs,
  },
  ml8: {
    marginLeft: Margin.m_5xs,
  },
  mt12: {
    marginTop: Margin.m_xs,
  },
  ml12: {
    marginLeft: Margin.m_xs,
  },
  symbolLayout: {
    height: 16,
    width: 16,
  },
  childLayout: {
    borderRadius: 9999,
    position: "absolute",
  },
  frameChildLayout: {
    maxHeight: "100%",
    flex: 1,
  },
  iconsFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  hvorSkalDuTypo: {
    textAlign: "left",
    color: Color.textColorsLighter,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  iconsFlexBox: {
    height: 20,
    width: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  subtractChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.textColorsInverse,
  },
  subtractItem: {
    height: "68%",
    width: "68%",
    top: "16%",
    right: "16%",
    bottom: "16%",
    left: "16%",
    backgroundColor: Color.brandColorsNightPurple,
  },
  subtract: {
    backgroundColor: Color.brandColorsCircleOfTravel1,
  },
  symbolChild: {
    height: "36%",
    width: "36%",
    top: "32%",
    right: "32%",
    bottom: "32%",
    left: "32%",
    backgroundColor: Color.brandColorsCircleOfTravel1,
  },
  frameChild: {
    width: 2,
  },
  symbolParent: {
    borderRadius: 12,
    height: 79,
    alignItems: "center",
  },
  trackingIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icons: {
    width: 24,
    height: 24,
  },
  iconsWrapper: {
    backgroundColor: Color.textColorsInverse,
  },
  pickupLocation: {
    fontSize: 10,
    letterSpacing: 0.2,
    lineHeight: 10,
  },
  frameView: {
    alignItems: "center",
    flexDirection: "row",
  },
  icons1: {
    backgroundColor: Color.textColorsInverse,
  },
  frameContainer: {
    borderRadius: 16,
    borderStyle: "solid",
    borderColor: "#2a2537",
    borderWidth: 1,
    width: 251,
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 16,
    justifyContent: "space-between",
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  hvorSkalDu: {
    fontSize: 14,
    letterSpacing: 0.3,
    lineHeight: 14,
  },
  hvorSkalDuHenWrapper: {
    paddingHorizontal: 1,
    paddingVertical: 0,
    display: "none",
    flexDirection: "row",
    backgroundColor: Color.textColorsInverse,
  },
  frameParent1: {
    backgroundColor: Color.textColorsInverse,
  },
  frameGroup: {
    width: 159,
    height: 98,
  },
  frameParent: {
    top: 14,
    left: 11,
    borderRadius: 24,
    width: 292,
    height: 108,
    paddingLeft: 20,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.textColorsInverse,
    position: "absolute",
  },
});

export default DestinationContainer;
