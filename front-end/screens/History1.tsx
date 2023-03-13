import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import SectionCard from "../components/SectionCard";
import BottomNavigationContainer from "../components/BottomNavigationContainer";
import { Margin, FontFamily, Color } from "../GlobalStyles";

const History1 = () => {
  return (
    <View style={styles.history}>
      <View style={[styles.navbar, styles.navbarFlexBox]}>
        <Image
          style={styles.logosIcon}
          resizeMode="cover"
          source={require("../assets/logos.png")}
        />
        <View style={[styles.frameParent, styles.iconsFlexBox]}>
          <View style={[styles.subtractParent, styles.subtractLayout]}>
            <View style={[styles.subtract, styles.subtractLayout]}>
              <View
                style={[
                  styles.subtractChild,
                  styles.framePosition,
                  styles.subtractLayout,
                ]}
              />
              <View style={styles.subtractItem} />
            </View>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-2051.png")}
            />
            <View
              style={[styles.icons, styles.iconsPosition, styles.iconsFlexBox]}
            >
              <Image
                style={styles.iconLayout}
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
        style={[styles.fare13, styles.mt_2, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/fare-1-3.png")}
      />
      <Text style={[styles.tripsmart, styles.mt_2, styles.tripsmartTypo]}>
        TripSmart
      </Text>
      <Text
        style={[
          styles.overallMonthlyTrip,
          styles.mt_2,
          styles.yourTypo,
          styles.overallMonthlyTripTypo,
        ]}
      >
        Overall Monthly Trip Stats
      </Text>
      <View style={[styles.frameGroup, styles.mt_2, styles.frameLayout]}>
        <View
          style={[
            styles.frameContainer,
            styles.framePosition,
            styles.navbarFlexBox,
          ]}
        >
          <View style={styles.iconsLayout}>
            <View
              style={[styles.icons1, styles.icons1Layout, styles.iconsFlexBox]}
            >
              <Image
                style={[styles.walletIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/wallet.png")}
              />
            </View>
            <Image
              style={[
                styles.walletFilledMoneyTool1Icon,
                styles.ml8_01,
                styles.iconPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/walletfilledmoneytool-1.png")}
            />
          </View>
          <View style={styles.ml11_21}>
            <Text style={[styles.moneySpent, styles.yourTypo]}>
              Money Spent
            </Text>
            <View style={[styles.wrapperFlexBox, styles.mt8_01]}>
              <Text style={[styles.text, styles.kmTypo]}>$95.38</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameView, styles.frameLayout]}>
          <View
            style={[
              styles.iconsGroup,
              styles.iconsLayout,
              styles.framePosition,
            ]}
          >
            <View
              style={[styles.icons1, styles.icons1Layout, styles.iconsFlexBox]}
            >
              <Image
                style={[styles.walletIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/wallet1.png")}
              />
            </View>
            <Image
              style={[
                styles.icons1Layout,
                styles.ml8_01,
                styles.iconPosition,
                styles.iconsPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/distance-1.png")}
            />
          </View>
          <View style={styles.distanceTravelledParent}>
            <Text style={[styles.moneySpent, styles.yourTypo]}>
              Distance Travelled
            </Text>
            <View
              style={[styles.kmWrapper, styles.mt8_01, styles.wrapperFlexBox]}
            >
              <Text style={[styles.km, styles.kmTypo]}>65.43km</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.tripHistory, styles.mt_2, styles.tripsmartTypo]}>
        Trip History
      </Text>
      <View style={[styles.frameParent1, styles.mt_2, styles.framePosition]}>
        <View style={styles.yourStatisticsParent}>
          <Text style={[styles.yourStatistics, styles.yourTypo]}>
            Your Statistics
          </Text>
          <Text
            style={[styles.gainInsightInto, styles.mt8_78, styles.gainTypo]}
          >
            Gain insight into your trips where you have used TripSmart
          </Text>
        </View>
        <SectionCard />
      </View>
      <View style={[styles.yourDetailedHistoryParent, styles.mt_2]}>
        <Text
          style={[
            styles.yourDetailedHistory,
            styles.yourTypo,
            styles.overallMonthlyTripTypo,
          ]}
        >
          Your Detailed History
        </Text>
        <Text style={[styles.gainInsightInto1, styles.mt10, styles.gainTypo]}>
          Gain insight into your TripSmart Trip History
        </Text>
      </View>
      <BottomNavigationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  ml18: {
    marginLeft: Margin.m_lg,
  },
  ml8_01: {
    marginLeft: 8.01,
  },
  mt8_01: {
    marginTop: 8.01,
  },
  ml11_21: {
    marginLeft: 11.21,
  },
  mt8_78: {
    marginTop: 8.78,
  },
  mt7_9: {
    marginTop: 7.9,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  mt_2: {
    marginTop: Margin.m_15xs,
  },
  navbarFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  subtractLayout: {
    height: 40,
    width: 40,
  },
  framePosition: {
    left: 0,
    position: "absolute",
  },
  iconsPosition: {
    left: 6,
    top: 6,
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  tripsmartTypo: {
    textAlign: "center",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    position: "absolute",
  },
  yourTypo: {
    textAlign: "left",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  overallMonthlyTripTypo: {
    lineHeight: 20,
    fontSize: 20,
    textAlign: "left",
    color: Color.textColorsMain,
    letterSpacing: -0.2,
  },
  frameLayout: {
    height: 35,
    position: "absolute",
  },
  icons1Layout: {
    height: 22,
    width: 22,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  kmTypo: {
    height: 13,
    lineHeight: 16,
    fontSize: 16,
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    letterSpacing: -0.2,
  },
  iconsLayout: {
    padding: 4,
    width: 35,
    borderRadius: 13,
    height: 35,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.brandColorsCrayolaYellow,
    alignItems: "center",
  },
  wrapperFlexBox: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  gainTypo: {
    color: Color.textColorsLight,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    alignSelf: "stretch",
  },
  logosIcon: {
    width: 152,
    height: 30,
    display: "none",
  },
  subtractChild: {
    borderRadius: 16,
    backgroundColor: Color.gainsboro,
    top: 0,
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
    top: 0,
    position: "absolute",
  },
  icons: {
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
    justifyContent: "space-between",
    zIndex: 0,
    backgroundColor: Color.brandColorsCrayolaYellow,
    flexDirection: "row",
  },
  fare13: {
    top: 27,
    width: 48,
    height: 48,
    left: 14,
  },
  tripsmart: {
    top: 35,
    left: 62,
    fontSize: 24,
    lineHeight: 29,
    color: Color.brandColorsNightPurple,
    width: 144,
    height: 31,
    zIndex: 2,
    letterSpacing: -0.2,
  },
  overallMonthlyTrip: {
    top: 185,
    width: 266,
    height: 115,
    zIndex: 3,
    color: Color.textColorsMain,
    left: 14,
    position: "absolute",
  },
  walletIcon: {
    display: "none",
  },
  icons1: {
    zIndex: 0,
  },
  walletFilledMoneyTool1Icon: {
    top: 9,
    left: 9,
    width: 18,
    height: 18,
  },
  moneySpent: {
    letterSpacing: 0.3,
    lineHeight: 9,
    textTransform: "capitalize",
    color: Color.textColorsLighter,
    fontSize: 10,
  },
  text: {
    width: 65,
  },
  frameContainer: {
    top: 0,
  },
  iconsGroup: {
    top: 0,
  },
  km: {
    width: 79,
  },
  kmWrapper: {
    alignSelf: "stretch",
  },
  distanceTravelledParent: {
    top: 2,
    left: 46,
    position: "absolute",
  },
  frameView: {
    left: 168,
    width: 120,
    top: 0,
  },
  frameGroup: {
    top: 222,
    width: 306,
    zIndex: 4,
    left: 14,
  },
  tripHistory: {
    top: 85,
    left: 60,
    fontSize: 40,
    letterSpacing: -0.4,
    lineHeight: 52,
    zIndex: 5,
    color: Color.textColorsMain,
  },
  yourStatistics: {
    fontSize: 18,
    lineHeight: 17,
    color: Color.textColorsMain,
    letterSpacing: -0.2,
  },
  gainInsightInto: {
    lineHeight: 13,
    fontSize: 10,
  },
  yourStatisticsParent: {
    alignSelf: "stretch",
  },
  frameParent1: {
    top: 276,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    paddingHorizontal: 21,
    paddingTop: 8,
    zIndex: 6,
    alignSelf: "stretch",
  },
  yourDetailedHistory: {
    color: Color.textColorsMain,
  },
  gainInsightInto1: {
    fontSize: 11,
    lineHeight: 15,
  },
  yourDetailedHistoryParent: {
    top: 665,
    left: 21,
    width: 350,
    height: 45,
    zIndex: 7,
    position: "absolute",
  },
  history: {
    backgroundColor: Color.textColorsInverse,
    height: 800,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default History1;
