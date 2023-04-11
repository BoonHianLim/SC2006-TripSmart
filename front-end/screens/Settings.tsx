import * as React from "react";
import { FC, useState, useEffect } from "react";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EnglishSection from "../components/EnglishSection";
import { Margin, FontFamily, Color } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SettingsContainer from "../components/SettingsContainer";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import en from "../locales/en.json";
import ch from "../locales/ch.json";
import ms from "../locales/ms.json";
import ta from "../locales/ta.json";

const messages = {
  en,
  ch,
  ms,
  ta,
};

const Settings: FC = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);
  const [status, setStatus] = useState("");
  const message1 = "Change Password";
  const message2 = "Log Out";
  const message3 = "Log In";
  const message4 = "Change Distance Metrics";
  const message5 = "Settings";
  const distMetric1 = "KM";
  const distMetric2 = "Miles";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch (value) {
        case "en":
          setResultText(messages.en["Settings_page"]);
          break;
        case "ch":
          setResultText(messages.ch["Settings_page"]);
          break;
        case "ms":
          setResultText(messages.ms["Settings_page"]);
          break;
        case "ta":
          setResultText(messages.ta["Settings_page"]);
          break;
        default:
          setResultText(messages.en["Settings_page"]);
      }
    });
  });

  //get status from localstorage
  const getStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value == "Guest") {
        setStatus("Guest");
      } else {
        setStatus("User");
      }
    } catch (e) {
      // error reading value
    }
  };

  const onPressButton = (buttonID) => {
    setSelectedButton(buttonID);
    AsyncStorage.setItem("selectedButton", buttonID.toString());
  };

  useEffect(() => {
    AsyncStorage.getItem("selectedButton").then((value) => {
      if (value !== null) {
        setSelectedButton(parseInt(value));
      }
    });
  }, []);

  return (
    getStatus(),
    console.log("here", status),
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView>
          <View style={[styles.settings, styles.settingsLayout]}>
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
                    style={[
                      styles.icons,
                      styles.iconsFlexBox,
                      styles.iconsFlexBox1,
                    ]}
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
            <Text
              style={[styles.tripsmart, styles.mt_2, styles.tripsmartLayout]}
            >
              TripSmart
            </Text>
            <EnglishSection />
            <Text style={[styles.settings1, styles.mt_2]}>
              {resultText && resultText[message5]}
            </Text>

            {/*Can reder to this to be dynamic */}
            {status === "User" ? (
              <View
                style={[
                  styles.changePasswordWrapper,
                  styles.mt_2,
                  styles.changeWrapperFlexBox,
                ]}
              >
                <Pressable
                  onPress={() => navigation.navigate("changePassword")}
                >
                  <Text
                    style={[
                      styles.changePassword,
                      styles.changeTypo,
                      styles.tripsmartLayout,
                    ]}
                  >
                    {resultText && resultText[message1]}
                  </Text>
                </Pressable>
              </View>
            ) : null}

            <View
              style={[
                styles.changeEmailWrapper,
                styles.mt_2,
                styles.changeWrapperFlexBox,
              ]}
            >
              {status === "User" ? (
                <Pressable onPress={() => navigation.navigate("LoginPage")}>
                  <Text
                    style={[
                      styles.changePassword,
                      styles.changeTypo,
                      styles.tripsmartLayout,
                    ]}
                  >
                    {resultText && resultText[message2]}
                  </Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text
                    style={[
                      styles.changePassword,
                      styles.changeTypo,
                      styles.tripsmartLayout,
                    ]}
                  >
                    {resultText && resultText[message3]}
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </ScrollView>
        <SettingsContainer selectedButton={"Settings"} />
      </GestureHandlerRootView>
    )
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
    paddingVertical: 8,
    paddingHorizontal: 8,
    height: 50,
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
    fontWeight: "600",
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
    lineHeight: 14,
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
    fontSize: 12,
    lineHeight: 15,
    color: Color.black,
  },
  changePasswordWrapper: {
    top: 555,
    zIndex: 8,
    left: Dimensions.get("window").width * 0.1,
  },
  changeEmailWrapper: {
    top: 488,
    zIndex: 7,
    left: Dimensions.get("window").width * 0.1,
  },
  kmh2Icon: {
    left: 0.7,
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
    left: 0.3,
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
    top: 325,
    fontSize: 13,
    lineHeight: 16.5,
    textAlign: "left",
    zIndex: 10,
    left: 23,
    color: Color.textColorsMain,
    position: "absolute",
  },
  settings: {
    height: Dimensions.get("window").height,
    alignItems: "center",
    backgroundColor: Color.textColorsInverse,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 50,
  },
});

export default Settings;
