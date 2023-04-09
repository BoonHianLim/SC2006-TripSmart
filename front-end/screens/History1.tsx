//variable - data contains json object of history
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
import EnglishSection from "../components/EnglishSection";
import { ScrollView } from "react-native-gesture-handler";
import { CSSProperties } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import SettingsContainer from "../components/SettingsContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const History1 = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState("");

  //database api to retrieve the history
  const retrieveHistory = async () => {
    console.log("retrieveHistory");
    console.log("email: ", email);
    //console.log("looking for records from database");
    // perform login action here using email and password
    // mongodb api here
    try {
      const response = await fetch(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/find",
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
      console.log("data: ", data);
      if (data != null) {
        setData(data);
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
      const isGuest = await AsyncStorage.getItem("@storage_Key");
      const value = await AsyncStorage.getItem("@storage_Email");
      if (isGuest == "Guest") {
        setEmail("Guest");
      } else if (value != null) setEmail(value);
    } catch (e) {
      // error reading value
    }
  };

  //useEffect
  React.useEffect(() => {
    if (email) {
      retrieveHistory();
    }
  }, [email]);

  return (
    getStatus(),
    console.log("here", data.documents),
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView>
          <View style={[styles.settings, styles.settingsLayout]}>
            <View style={[styles.navbar, styles.navbarFlexBox]}>
              <View
                style={[
                  styles.frameParent,
                  styles.iconsFlexBox,
                  styles.iconsFlexBox1,
                ]}
              ></View>
            </View>
            <Image
              style={[styles.fare13, styles.mt_2, styles.fare13Position]}
              resizeMode="cover"
              source={require("../assets/fare-1-3.png")}
            />

            <Text
              style={[styles.tripsmart, styles.mt_2, styles.tripsmartLayout]}
            >
              TripSmart
            </Text>

            <Text style={[styles.settings1, styles.mt_2]}>{`History `}</Text>
          </View>

          {/*dynamic rendering */}
          {email === "Guest" ? (
            <View
              style={[
                styles.changePasswordWrapper,
                styles.mt_2,
                styles.changeWrapperFlexBox,
              ]}
            >
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text
                  style={[
                    styles.changePassword,
                    styles.changeTypo,
                    styles.tripsmartLayout,
                  ]}
                >
                  Login to Save and View History
                </Text>
              </Pressable>
            </View>
          ) : null}
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
    width: 304,
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
    top: 365,
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
    top: 2.5,
    position: "relative",
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
    top: Dimensions.get("window").height * 0.07,
    width: 48,
    height: 48,
    zIndex: 1,
  },
  tripsmart: {
    top: Dimensions.get("window").height * 0.07,
    left: Dimensions.get("window").width * 0.12,
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
    top: Dimensions.get("window").height * 0.12,
    left: Dimensions.get("window").width * 0.3,
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
  changePassword: {
    fontSize: 13,
    lineHeight: 12,
    color: Color.black,
  },
  changePasswordWrapper: {
    top: Dimensions.get("window").height * 0.5,
    zIndex: 6,
    left: Dimensions.get("window").width * 0.1,
  },
  changeEmailWrapper: {
    top: 488,
    left: 31,
    zIndex: 7,
  },
  kmh2Icon: {
    left: 0.5,
  },
  kmh2Wrapper: {
    borderStyle: "solid",
    borderColor: "#1a1528",
    borderWidth: 3,
  },
  km: {
    width: 59,
    color: Color.textColorsMain,
  },
  frameContainer: {
    left: 90,
    zIndex: 8,
  },
  kmh1Icon: {
    left: 3,
  },
  miles: {
    color: Color.textColorsMain,
    width: 59,
  },
  frameParent1: {
    left: 230,
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
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
  },
  result: {
    width: "100%",
  },
});

export default History1;
