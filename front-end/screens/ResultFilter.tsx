import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PassengersSection from "../components/PassengersSection";
import EcoFriendlySection from "../components/EcoFriendlySection";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const ResultFilter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resultFilter}>
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate("ResultList")}
      >
        <Image
          style={styles.headerChild}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Text style={styles.filter}>Filter</Text>
      </Pressable>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.frameChild, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/vector-938.png")}
        />
        <PassengersSection />
        <View style={[styles.rideTypesWrapper, styles.mt_7]}>
          <Text style={[styles.rideTypes, styles.rideTypesTypo]}>
            Ride Types
          </Text>
        </View>
        <Image
          style={[styles.frameItem, styles.mt_7, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/vector-938.png")}
        />
        <EcoFriendlySection />
      </View>
      <View style={[styles.applyFiltersWrapper, styles.iconsFlexBox]}>
        <Text style={[styles.applyFilters, styles.rideTypesTypo]}>
          Apply Filters
        </Text>
      </View>
      <View style={styles.bottomNavigation}>
        <View style={styles.frameParent}>
          <View style={[styles.iconsParent, styles.iconsSpaceBlock]}>
            <View style={[styles.icons, styles.iconsFlexBox]}>
              <Image
                style={styles.mapIcon}
                resizeMode="cover"
                source={require("../assets/map.png")}
              />
            </View>
            <Text style={[styles.planlg, styles.mt8_35, styles.planlgTypo]}>
              Map
            </Text>
          </View>
          <View style={styles.iconsSpaceBlock}>
            <View style={[styles.icons, styles.iconsFlexBox]}>
              <Image
                style={styles.mapIcon}
                resizeMode="cover"
                source={require("../assets/ticket3.png")}
              />
            </View>
            <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
              History
            </Text>
          </View>
          <View style={[styles.iconsContainer, styles.iconsSpaceBlock]}>
            <View style={[styles.icons, styles.iconsFlexBox]}>
              <Image
                style={styles.mapIcon}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </View>
            <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
              Profile
            </Text>
          </View>
          <View style={styles.iconsSpaceBlock}>
            <View style={[styles.icons, styles.iconsFlexBox]}>
              <Image
                style={styles.mapIcon}
                resizeMode="cover"
                source={require("../assets/cog-wheel2.png")}
              />
            </View>
            <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
              Settings
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.bottomNavigationInner,
            styles.mt8_35,
            styles.iconsFlexBox,
          ]}
        >
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/vector-391.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: Margin.m_20xs,
  },
  mt8_35: {
    marginTop: 8.35,
  },
  frameLayout: {
    height: 1,
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
  },
  rideTypesTypo: {
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
    fontWeight: "700",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconsSpaceBlock: {
    padding: 8,
    width: 74,
    alignItems: "center",
  },
  planlgTypo: {
    textAlign: "center",
    lineHeight: 10,
    fontSize: 10,
  },
  headerChild: {
    top: 5,
    left: -1,
    width: 24,
    height: 19,
    position: "absolute",
  },
  filter: {
    top: 0,
    left: 38,
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: 29,
    textAlign: "left",
    fontWeight: "700",
    color: Color.black,
    position: "absolute",
  },
  header: {
    top: 65,
    left: 17,
    width: 93,
    height: 30,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
  },
  rideTypes: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    color: Color.textColorsMain,
  },
  rideTypesWrapper: {
    height: 48,
    paddingHorizontal: 24,
    paddingTop: 29,
    paddingBottom: 28,
    zIndex: 2,
    alignSelf: "stretch",
  },
  frameItem: {
    zIndex: 3,
  },
  vectorParent: {
    top: 106,
    left: 0,
    width: 360,
    height: 541,
    position: "absolute",
    backgroundColor: Color.textColorsInverse,
  },
  applyFilters: {
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 17,
    color: Color.black,
    fontFamily: FontFamily.montserratBold,
  },
  applyFiltersWrapper: {
    top: 459,
    left: 97,
    borderRadius: 16,
    backgroundColor: Color.goldenrod_200,
    width: 189,
    height: 37,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
    position: "absolute",
  },
  mapIcon: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 20,
    height: 20,
    flexDirection: "row",
  },
  planlg: {
    color: Color.brandColorsNightPurple,
  },
  iconsParent: {
    backgroundColor: Color.brandColorsCrayolaYellow,
  },
  billetter: {
    color: Color.textColorsLight,
  },
  iconsContainer: {
    display: "none",
  },
  frameParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameInner: {
    width: 89,
    height: 0,
    display: "none",
  },
  bottomNavigationInner: {
    paddingLeft: 17,
    alignSelf: "stretch",
  },
  bottomNavigation: {
    top: 720,
    left: 3,
    width: 357,
    height: 80,
    paddingLeft: 8,
    paddingRight: 17,
    paddingBottom: 23,
    alignItems: "center",
    position: "absolute",
    backgroundColor: Color.textColorsInverse,
  },
  resultFilter: {
    height: 800,
    width: "100%",
    flex: 1,
    backgroundColor: Color.textColorsInverse,
  },
});

export default ResultFilter;
