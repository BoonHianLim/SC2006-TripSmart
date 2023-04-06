import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import SectionCard from "../components/SectionCard";
import { Margin, FontFamily, Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { CSSProperties } from "react";
import SettingsContainer from "../components/SettingsContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const History1 = () => {
  const [email, setEmail] = React.useState("");

  //database api to retrieve the history
  const retrieveHistory = async () => {
    //console.log("looking for records from database");
    // perform login action here using email and password
    // mongodb api here
    try {
      const response = await fetch(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/findAll",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key":
              "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
          },

          body: JSON.stringify({
            dataSource: "seventh",
            database: "Account",
            collection: "deepLinkHistory",
            filter: {
              email: email,
            },
          }),
        }
      );
      const data = await response.json();
      if (data.document != null) {
        console.log(data);
      } else {
        console.log("History might be empty");
      }
    } catch (err) {
      console.log("error retrieving data: ", err);
    }
  };

  //get email from localstorage
  const getStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Email");
      if (value != null) {
        setEmail(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const { width, height } = Dimensions.get("window");
  return (
    getStatus(),
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView>
          {/* render the history using the retrieveHistory function */}
        </ScrollView>
        <SettingsContainer selectedButton={"History"} />
      </GestureHandlerRootView>
    )
  );
};

//most of these styles are not being used here
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
    width: "95%",
    height: 455,
    zIndex: 7,
    position: "absolute",
  },
  history: {
    backgroundColor: Color.textColorsInverse,
    height: Dimensions.get("window").height * 1.63,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default History1;
