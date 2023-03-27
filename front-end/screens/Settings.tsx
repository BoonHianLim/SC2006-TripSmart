import * as React from "react";
import { FC, useState } from 'react';
import { Pressable, Image, StyleSheet, View, ScrollView, Text, Button } from "react-native";
import EnglishSection from "../components/EnglishSection";
import { Margin, FontFamily, Color } from "../GlobalStyles";
import SettingsLangDropdown from "../components/SettingsLangDropdown";

const Settings : FC = () => {
  return (
    <View style={[styles.settings, styles.settingsLayout]}>
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <SettingsLangDropdown />
        </ScrollView>
      </View>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <Image
          style={styles.logosIcon}
          resizeMode="cover"
          source={require("../assets/logos.png")}
        />
        <View
          style={[
            styles.frameParent,
            styles.iconsFlexBox,
            styles.iconsFlexBox1,
          ]}
        >
          <View style={[styles.subtractParent, styles.subtractLayout]}>
            <View style={[styles.subtract, styles.subtractLayout]}>
              <View
                style={[
                  styles.subtractChild,
                  styles.childPosition,
                  styles.subtractLayout,
                ]}
              />
              <View style={styles.subtractItem} />
            </View>
            <Image
              style={[styles.frameChild, styles.childPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-2051.png")}
            />
            <View
              style={[styles.icons, styles.iconsFlexBox, styles.iconsFlexBox1]}
            >
              <Image
                style={[styles.bellIcon, styles.settingsLayout]}
                resizeMode="cover"
                source={require("../assets/bell.png")}
              />
            </View>
          </View>
          <Image
            style={[
              styles.pexelsPhoto115973081Icon,
              styles.ml18,
              styles.subtractLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/pexelsphoto11597308-1.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.fare13, styles.mt_2, styles.fare13Position]}
        resizeMode="cover"
        source={require("../assets/fare-1-3.png")}
      />
      <Text style={[styles.tripsmart, styles.mt_2, styles.tripsmartLayout]}>
        TripSmart
      </Text>
      <EnglishSection />
      <Text style={[styles.settings1, styles.mt_2]}>{`Settings `}</Text>
      <View
        style={[styles.bottomNavigation, styles.mt_2, styles.fare13Position]}
      >
        <View style={[styles.frameGroup, styles.navbarFlexBox]}>
          <View style={styles.iconsSpaceBlock}>
            <View
              style={[styles.icons1, styles.iconsFlexBox, styles.iconsFlexBox1]}
            >
              <Image
                style={[styles.bellIcon, styles.settingsLayout]}
                resizeMode="cover"
                source={require("../assets/map.png")}
              />
            </View>
            <Text style={[styles.planlg, styles.mt8_35, styles.planlgTypo]}>
              Map
            </Text>
          </View>
          <View style={[styles.iconsGroup, styles.iconsSpaceBlock]}>
            <View
              style={[styles.icons1, styles.iconsFlexBox, styles.iconsFlexBox1]}
            >
              <Image
                style={[styles.bellIcon, styles.settingsLayout]}
                resizeMode="cover"
                source={require("../assets/ticket.png")}
              />
            </View>
            <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
              History
            </Text>
          </View>
          <View style={[styles.iconsContainer, styles.iconsSpaceBlock]}>
            <View
              style={[styles.icons1, styles.iconsFlexBox, styles.iconsFlexBox1]}
            >
              <Image
                style={[styles.bellIcon, styles.settingsLayout]}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </View>
            <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
              Profile
            </Text>
          </View>
          <View style={[styles.frameView, styles.iconsSpaceBlock]}>
            <View
              style={[styles.icons1, styles.iconsFlexBox, styles.iconsFlexBox1]}
            >
              <Image
                style={[styles.bellIcon, styles.settingsLayout]}
                resizeMode="cover"
                source={require("../assets/cog-wheel.png")}
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
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/vector-39.png")}
          />
        </View>
      </View>
      <View
        style={[
          styles.changePasswordWrapper,
          styles.mt_2,
          styles.changeWrapperFlexBox,
        ]}
      >
        <Text
          style={[
            styles.changePassword,
            styles.changeTypo,
            styles.tripsmartLayout,
          ]}
        >
          Change Password
        </Text>
      </View>
      <View
        style={[
          styles.changeEmailWrapper,
          styles.mt_2,
          styles.changeWrapperFlexBox,
        ]}
      >
        <Text
          style={[
            styles.changePassword,
            styles.changeTypo,
            styles.tripsmartLayout,
          ]}
        >
          Change Email
        </Text>
      </View>
      <View style={[styles.frameContainer, styles.mt_2, styles.framePosition]}>
        <View style={[styles.kmh2Wrapper, styles.wrapperLayout]}>
          <Image
            style={[styles.kmh2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/kmh-2.png")}
          />
        </View>
        <Text style={[styles.km, styles.mt12, styles.kmTypo]}>KM</Text>
      </View>
      <View style={[styles.frameParent1, styles.mt_2, styles.framePosition]}>
        <View style={styles.wrapperLayout}>
          <Image
            style={[styles.kmh1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/kmh-1.png")}
          />
        </View>
        <Text style={[styles.miles, styles.mt12, styles.kmTypo]}>Miles</Text>
      </View>
      <Text
        style={[styles.changeDistanceMetrics, styles.mt_2, styles.changeTypo]}
      >
        Change Distance Metrics
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml18: {
    marginLeft: Margin.m_lg,
  },
  mt8_35: {
    marginTop: 8.35,
  },
  mt12: {
    marginTop: Margin.m_xs,
  },
  mt_2: {
    marginTop: Margin.m_15xs,
  },
  settingsLayout: {
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  navbarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconsFlexBox1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subtractLayout: {
    height: 40,
    width: 40,
  },
  childPosition: {
    top: 0,
    position: "absolute",
  },
  fare13Position: {
    left: 14,
    position: "absolute",
  },
  tripsmartLayout: {
    width: 144,
    textAlign: "center",
  },
  planlgTypo: {
    lineHeight: 10,
    fontSize: 10,
    textAlign: "center",
  },
  iconsSpaceBlock: {
    padding: 8,
    width: 74,
    alignItems: "center",
  },
  changeWrapperFlexBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: 43,
    backgroundColor: Color.goldenrod_200,
    borderRadius: 12,
    alignSelf: "stretch",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  changeTypo: {
    letterSpacing: 0.4,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  framePosition: {
    borderRadius: 8,
    top: 370,
    position: "absolute",
    alignItems: "center",
  },
  wrapperLayout: {
    height: 60,
    width: 60,
    backgroundColor: Color.brandColorsPeachBlossom,
    borderRadius: 24,
    overflow: "hidden",
  },
  iconLayout: {
    height: 53,
    width: 53,
    top: 3,
    position: "absolute",
  },
  kmTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 12,
    letterSpacing: 0.2,
    fontSize: 12,
    textAlign: "center",
  },
  logosIcon: {
    width: 152,
    height: 30,
    display: "none",
  },
  subtractChild: {
    left: 0,
    borderRadius: 16,
    backgroundColor: Color.gainsboro,
  },
  subtractItem: {
    top: -3,
    left: 24,
    borderRadius: 9999,
    backgroundColor: Color.darkorange,
    width: 14,
    height: 14,
    position: "absolute",
  },
  subtract: {
    borderRadius: 2,
    backgroundColor: Color.brandColorsNightPurple,
  },
  frameChild: {
    left: 26,
    borderRadius: 999999,
    width: 10,
    height: 10,
  },
  bellIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  icons: {
    top: 6,
    left: 6,
    width: 28,
    height: 28,
    position: "absolute",
  },
  subtractParent: {
    display: "none",
  },
  pexelsPhoto115973081Icon: {
    borderRadius: 999,
  },
  frameParent: {
    display: "none",
  },
  navbar: {
    width: 430,
    height: 171,
    paddingHorizontal: 24,
    paddingTop: 6,
    paddingBottom: 10,
    zIndex: 0,
    backgroundColor: Color.brandColorsCrayolaYellow,
    alignItems: "center",
  },
  fare13: {
    top: 27,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  tripsmart: {
    top: 35,
    left: 62,
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 29,
    height: 31,
    zIndex: 2,
    color: Color.brandColorsNightPurple,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    width: 144,
    position: "absolute",
  },
  settings1: {
    top: 85,
    left: 94,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 52,
    zIndex: 4,
    color: Color.textColorsMain,
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  icons1: {
    width: 20,
    height: 20,
  },
  planlg: {
    color: Color.brandColorsNightPurple,
  },
  billetter: {
    color: Color.textColorsLight,
  },
  iconsGroup: {
    backgroundColor: Color.textColorsInverse,
  },
  iconsContainer: {
    display: "none",
  },
  frameView: {
    backgroundColor: Color.brandColorsCrayolaYellow,
  },
  frameGroup: {
    alignSelf: "stretch",
    backgroundColor: Color.textColorsInverse,
  },
  frameItem: {
    width: 89,
    height: 0,
  },
  bottomNavigationInner: {
    paddingLeft: 17,
    alignSelf: "stretch",
    display: "none",
  },
  bottomNavigation: {
    top: 734,
    width: 360,
    height: 132,
    paddingLeft: 8,
    paddingRight: 17,
    paddingBottom: 23,
    zIndex: 5,
    alignItems: "center",
    backgroundColor: Color.textColorsInverse,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 50,
  },
  changePassword: {
    fontSize: 13,
    lineHeight: 13,
    color: Color.black,
  },
  changePasswordWrapper: {
    top: 555,
    zIndex: 6,
    left: 32,
  },
  changeEmailWrapper: {
    top: 488,
    left: 31,
    zIndex: 7,
  },
  kmh2Icon: {
    left: 4,
  },
  kmh2Wrapper: {
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 3,
  },
  km: {
    width: 119,
    color: Color.textColorsMain,
  },
  frameContainer: {
    left: 42,
    zIndex: 8,
  },
  kmh1Icon: {
    left: 3,
  },
  miles: {
    color: Color.textColorsLighter,
    width: 110,
  },
  frameParent1: {
    left: 191,
    zIndex: 9,
  },
  changeDistanceMetrics: {
    top: 335,
    fontSize: 14,
    lineHeight: 14,
    textAlign: "left",
    zIndex: 10,
    left: 32,
    color: Color.textColorsMain,
    position: "absolute",
  },
  settings: {
    height: 800,
    alignItems: "center",
    backgroundColor: Color.textColorsInverse,
  },
});

export default Settings;
