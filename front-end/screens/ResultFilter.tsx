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
import { useNavigation } from "@react-navigation/native";
import PassengersSection from "../components/PassengersSection";
import EcoFriendlySection from "../components/EcoFriendlySection";
import { Margin, FontFamily, Color } from "../GlobalStyles";
import SettingsContainer from "../components/SettingsContainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';

const messages = {
  en,
  ch,
  ms,
  ta
};

const ResultFilter = () => {
  const navigation = useNavigation();

  const message1 = "Filter";
  const message2 = "Ride Types";
  const message3 = "Apply Filters";
  const [resultText, setResultText] = useState<any>();

  useFocusEffect(() => {
    AsyncStorage.getItem("language").then((value) => {
      switch(value){
        case 'en':
          setResultText(messages.en["Filter_page"]);
          break;
        case 'ch':
          setResultText(messages.ch["Filter_page"]);
          break;
        case 'ms':
          setResultText(messages.ms["Filter_page"]);
          break;
        case 'ta':
          setResultText(messages.ta["Filter_page"]);
          break;
        default:
          setResultText(messages.en["Filter_page"]);
      }
    })
    }
  )

  return (
    <View style={styles.resultFilter}>
      <View style = {styles.container}>
        <View style = {{height:120}}>
          <Pressable
            style={styles.header}
            onPress={() => navigation.navigate("ResultList")}
          >
          <Image
              style={styles.headerChild}
              resizeMode="cover"
              source={require("../assets/arrow-1.png")}
          />
          <Text style={styles.filter}>{resultText && resultText[message1]}</Text>
          </Pressable>
        </View>

      <View style={styles.vectorParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/vector-938.png")}
        />
        <PassengersSection />
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/vector-938.png")}
        />
      </View>
      <View style={styles.rideTypesWrapper}>
        <Text style={[styles.rideTypes, styles.rideTypesTypo]}>
        {resultText && resultText[message2]}
        </Text>
      </View>
      <View style ={{paddingBottom:30}}>
        <EcoFriendlySection/>
      </View>
      <View
        style={[
          styles.changeEmailWrapper,
          styles.changeWrapperFlexBox,
        ]}
      >
        <Text style={styles.filterButton}>
        {resultText && resultText[message3]}
        </Text>
      </View>
      </View>
      <SettingsContainer selectedButton={undefined} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  changeEmailWrapper: {
    left: Dimensions.get("window").width * 0.25,
    borderRadius: 16,
    backgroundColor: Color.goldenrod_200,
    width: Dimensions.get("window").width * 0.5,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  changeWrapperFlexBox: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    height: 60,
    backgroundColor: Color.goldenrod_200,
    borderRadius: 12,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    fontSize: 13,
    lineHeight: 13,
    color: Color.black,
    letterSpacing: 0.4,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "center",
  },
  mt8_35: {
    marginTop: 8.35,
  },
  frameLayout: {
    height: 1,
    overflow: "hidden",
    maxWidth: "100%",
    alignSelf: "stretch",
    width: Dimensions.get("window").width,
    resizeMode: 'stretch'
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
  },
  rideTypes: {
    fontSize: 14,
    letterSpacing: 0.4,
    lineHeight: 14,
    color: Color.textColorsMain,
  },
  rideTypesWrapper: {
    height: 80,
    paddingHorizontal: 24,
    paddingTop: 20,
    alignSelf: "stretch",
  },
  vectorParent: {
    left: 0,
    width: "100%",
    backgroundColor: Color.textColorsInverse,
  },
  applyFilters: {
    fontSize: 17,
    letterSpacing: 0.5,
    lineHeight: 17,
    color: Color.black,
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
    zIndex: 7,
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
    top: Dimensions.get("window").height * 0.95,
    left: 3,
    width: Dimensions.get("window").width,
    height: 80,
    paddingLeft: 8,
    paddingRight: 17,
    paddingBottom: 23,
    alignItems: "center",
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
