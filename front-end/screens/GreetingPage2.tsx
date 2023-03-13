import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const GreetingPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.greetingPage2}>
      <View style={styles.greetingPage2Inner}>
        <View style={styles.frameParent}>
          <View style={styles.logosParent}>
            <Image
              style={styles.logosIcon}
              resizeMode="cover"
              source={require("../assets/logos1.png")}
            />
            <Image
              style={[styles.selfDriving2Icon, styles.mt36]}
              resizeMode="cover"
              source={require("../assets/selfdriving-2.png")}
            />
            <View style={[styles.abundanceOfChoiceParent, styles.mt36]}>
              <Text
                style={[styles.abundanceOfChoice, styles.tripsmartLetsYouClr]}
              >
                Abundance of Choice
              </Text>
              <Text
                style={[
                  styles.tripsmartLetsYou,
                  styles.mt14_29,
                  styles.tripsmartLetsYouClr,
                ]}
              >{`TripSmart let’s you compare price fares and travel timings across all the major transport options available in Singapore from ride-hailing services and taxis to car rental and public transport services!   `}</Text>
            </View>
          </View>
          <Pressable
            style={styles.navigationNext}
            onPress={() => navigation.navigate("GreetingPage3")}
          >
            <View style={[styles.nextWrapper, styles.nextWrapperFlexBox]}>
              <Text style={styles.next}>Next</Text>
            </View>
            <View style={[styles.rectangleParent, styles.nextWrapperFlexBox]}>
              <View style={[styles.frameChild, styles.frameLayout]} />
              <View
                style={[styles.frameItem, styles.ml8_3, styles.frameLayout]}
              />
              <View
                style={[styles.frameChild, styles.ml8_3, styles.frameLayout]}
              />
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14_29: {
    marginTop: 14.29,
  },
  mt36: {
    marginTop: Margin.m_17xl,
  },
  ml8_3: {
    marginLeft: Margin.m_4xs_3,
  },
  tripsmartLetsYouClr: {
    color: Color.brandColorsNightPurple,
    textAlign: "center",
  },
  nextWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 25,
    borderRadius: 8297,
  },
  logosIcon: {
    width: 70,
    height: 70,
  },
  selfDriving2Icon: {
    width: 261,
    height: 262,
  },
  abundanceOfChoice: {
    fontSize: 45,
    letterSpacing: -0.4,
    lineHeight: 53,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    width: 306,
    textAlign: "center",
  },
  tripsmartLetsYou: {
    fontSize: 13,
    letterSpacing: 0.1,
    lineHeight: 22,
    fontFamily: FontFamily.montserratRegular,
    width: 311,
    textAlign: "center",
  },
  abundanceOfChoiceParent: {
    width: 298,
    height: 199,
    alignItems: "center",
  },
  logosParent: {
    top: -34,
    left: -35,
    width: 430,
    height: 683,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  next: {
    fontSize: 20,
    letterSpacing: 0.2,
    lineHeight: 19,
    fontWeight: "800",
    fontFamily: FontFamily.montserratExtrabold,
    color: Color.textColorsInverse,
    width: 117,
    textAlign: "center",
  },
  nextWrapper: {
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: Color.brandColorsNightPurple,
    paddingHorizontal: 0,
    paddingVertical: 13,
    width: 117,
  },
  frameChild: {
    backgroundColor: Color.backgroundColorsBackgroundLight1,
    height: 10,
  },
  frameItem: {
    backgroundColor: Color.goldenrod_100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 4.1,
    height: 17,
  },
  rectangleParent: {
    top: 54,
    left: 12,
    alignItems: "center",
  },
  navigationNext: {
    top: 696,
    left: 121,
    height: 71,
    width: 117,
    position: "absolute",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  greetingPage2Inner: {
    width: 360,
    flex: 1,
  },
  greetingPage2: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    width: "100%",
    height: 800,
    flex: 1,
  },
});

export default GreetingPage2;
