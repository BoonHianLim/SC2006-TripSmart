import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily } from "../GlobalStyles";

const SectionCard = () => {
  return (
    <View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <View style={styles.frameGroup}>
              <Text style={[styles.text, styles.kmTypo]}>65.43</Text>
              <Text style={[styles.km, styles.ml8_78, styles.kmTypo]}>km</Text>
            </View>
            <Text style={[styles.feb1, styles.mt14_05, styles.feb1Typo]}>
              Feb 1 - Feb 28, 2023
            </Text>
          </View>
          <View style={[styles.februaryParent, styles.ml12_29]}>
            <Text style={[styles.february, styles.km1Typo1, styles.feb1Typo]}>
              February
            </Text>
            <View style={[styles.icons, styles.ml8_78]}>
              <Image
                style={[styles.chevronDownIcon, styles.frameChildLayout1]}
                resizeMode="cover"
                source={require("../assets/chevron-down.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.mt17_56}>
          <View style={[styles.vectorParent, styles.parentLayout2]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
              resizeMode="cover"
              source={require("../assets/vector-982.png")}
            />
            <Text
              style={[
                styles.km1,
                styles.ml8_78,
                styles.km1Typo,
                styles.km1Typo1,
              ]}
            >
              25 km
            </Text>
          </View>
          <View
            style={[styles.frameParent1, styles.mt8_78, styles.parentLayout2]}
          >
            <View style={[styles.group, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>20</Text>
              <LinearGradient
                style={[
                  styles.frameItem,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View
              style={[styles.container, styles.ml4_39, styles.parent11Layout]}
            >
              <Text style={[styles.text1, styles.km1Typo]}>8</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent1, styles.ml4_39, styles.parentLayout]}>
              <Text style={[styles.text1, styles.km1Typo]}>18</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent2, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>4</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent3, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>12</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent4, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>8</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent5, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>14</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent6, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>0</Text>
              <LinearGradient
                style={[
                  styles.frameChild5,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent7, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>3</Text>
              <LinearGradient
                style={[
                  styles.frameChild5,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent8, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>5</Text>
              <LinearGradient
                style={[
                  styles.frameChild5,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent9, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>10</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.parent10, styles.ml4_39, styles.parentLayout]}>
              <Text style={[styles.text1, styles.km1Typo]}>7</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View
              style={[styles.parent11, styles.ml4_39, styles.parent11Layout]}
            >
              <Text style={[styles.text1, styles.km1Typo]}>20</Text>
              <LinearGradient
                style={[
                  styles.frameInner,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
            <View style={[styles.group, styles.ml4_39, styles.parentLayout1]}>
              <Text style={[styles.text1, styles.km1Typo]}>28</Text>
              <LinearGradient
                style={[
                  styles.frameChild11,
                  styles.mt8_78,
                  styles.frameChildLayout,
                ]}
                locations={[0, 0.51, 1]}
                colors={["#ff9f40", "#ffa851", "#ffc286"]}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml8_78: {
    marginLeft: 8.78,
  },
  mt14_05: {
    marginTop: 14.05,
  },
  ml12_29: {
    marginLeft: 12.29,
  },
  mt8_78: {
    marginTop: 8.78,
  },
  ml4_39: {
    marginLeft: 4.39,
  },
  mt17_56: {
    marginTop: 17.56,
  },
  kmTypo: {
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  feb1Typo: {
    lineHeight: 12,
    fontSize: 12,
    textAlign: "left",
  },
  km1Typo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  frameChildLayout1: {
    maxWidth: "100%",
    flex: 1,
    overflow: "hidden",
  },
  parentLayout2: {
    width: 293,
    flexDirection: "row",
  },
  km1Typo: {
    textAlign: "center",
    lineHeight: 10,
    fontSize: 11,
  },
  parentLayout1: {
    width: 22,
    alignItems: "center",
  },
  frameChildLayout: {
    backgroundColor: Color.brandColorsCircleOfTravel1,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    width: 14,
  },
  parent11Layout: {
    opacity: 0.3,
    width: 22,
    alignItems: "center",
  },
  parentLayout: {
    opacity: 0.6,
    width: 22,
    alignItems: "center",
  },
  text: {
    fontSize: 39,
    letterSpacing: -0.4,
    lineHeight: 38,
    width: 112,
    height: 33,
  },
  km: {
    fontSize: 14,
    letterSpacing: -0.1,
    lineHeight: 14,
    height: 11,
    flex: 1,
  },
  frameGroup: {
    alignItems: "flex-end",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  feb1: {
    fontFamily: FontFamily.montserratRegular,
    color: Color.textColorsLight,
    height: 10,
    alignSelf: "stretch",
  },
  frameContainer: {
    flex: 1,
  },
  february: {
    letterSpacing: 0.2,
    color: Color.textColorsMain,
    fontWeight: "500",
    lineHeight: 12,
    fontSize: 12,
  },
  chevronDownIcon: {
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  icons: {
    height: 14,
    width: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  februaryParent: {
    borderRadius: 11,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
    borderWidth: 0.9,
    height: 39,
    paddingLeft: 18,
    paddingTop: 9,
    paddingRight: 14,
    paddingBottom: 9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    height: 1,
  },
  km1: {
    color: Color.textColorsLighter,
  },
  vectorParent: {
    alignItems: "center",
  },
  text1: {
    letterSpacing: 0.1,
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 10,
    fontSize: 11,
    alignSelf: "stretch",
  },
  frameItem: {
    height: 83,
  },
  group: {
    opacity: 0.2,
  },
  frameInner: {
    flex: 1,
  },
  container: {
    height: 102,
  },
  parent1: {
    height: 150,
  },
  parent2: {
    height: 69,
  },
  parent3: {
    height: 119,
  },
  parent4: {
    height: 92,
  },
  parent5: {
    height: 125,
  },
  frameChild5: {
    transform: [
      {
        rotate: "0.37deg",
      },
    ],
    flex: 1,
  },
  parent6: {
    height: 20,
  },
  parent7: {
    height: 59,
  },
  parent8: {
    height: 80,
  },
  parent9: {
    height: 109,
  },
  parent10: {
    height: 90,
  },
  parent11: {
    height: 177,
  },
  frameChild11: {
    height: 122,
  },
  frameParent1: {
    height: 183,
    justifyContent: "center",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  frameParent: {
    borderRadius: 21,
    backgroundColor: Color.textColorsInverse,
    height: 328,
    padding: 21,
    overflow: "hidden",
    alignSelf: "stretch",
  },
});

export default SectionCard;
