import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsContainer from "../components/SettingsContainer";
import { FontFamily, Color } from "../GlobalStyles";

const ResultList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.resultList}>
      <View style={styles.headerParent}>
        <View style={styles.header}>
          <Pressable
            style={styles.image3}
            onPress={() => navigation.navigate("ResultFilter")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/image-3.png")}
            />
          </Pressable>
          <Image
            style={styles.headerChild}
            resizeMode="cover"
            source={require("../assets/arrow-11.png")}
          />
          <Text style={styles.results}>Results</Text>
        </View>
        <View style={styles.sortingGroup}>
          <Image
            style={styles.borderorange1Icon}
            resizeMode="cover"
            source={require("../assets/borderorange-1.png")}
          />
          <Image
            style={styles.border1Icon}
            resizeMode="cover"
            source={require("../assets/border-1.png")}
          />
          <View style={[styles.cheapestGroup, styles.groupLayout]}>
            <Image
              style={styles.cheapestGroupChild}
              resizeMode="cover"
              source={require("../assets/arrow-2.png")}
            />
            <Text style={[styles.cheapest, styles.fastestTypo]}>Cheapest</Text>
          </View>
          <View style={[styles.fastestGroup, styles.groupLayout]}>
            <Image
              style={styles.cheapestGroupChild}
              resizeMode="cover"
              source={require("../assets/arrow-21.png")}
            />
            <Text style={[styles.fastest, styles.fastestTypo]}>Fastest</Text>
          </View>
        </View>
        <SettingsContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 21,
    width: 98,
    top: 0,
    position: "absolute",
  },
  fastestTypo: {
    lineHeight: 20,
    fontSize: 15,
    left: 0,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image3: {
    left: 287,
    width: 36,
    top: 0,
    height: 36,
    position: "absolute",
  },
  headerChild: {
    top: 9,
    left: -1,
    width: 24,
    height: 19,
    position: "absolute",
  },
  results: {
    top: 6,
    left: 39,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  header: {
    top: 50,
    left: 19,
    width: 323,
    height: 36,
    position: "absolute",
  },
  borderorange1Icon: {
    top: 30,
    width: 176,
    height: 3,
    left: 0,
    position: "absolute",
  },
  border1Icon: {
    top: 22,
    left: 169,
    width: 166,
    height: 16,
    position: "absolute",
  },
  cheapestGroupChild: {
    top: 5,
    left: 95,
    width: 6,
    height: 11,
    position: "absolute",
  },
  cheapest: {
    color: "#f9bb00",
  },
  cheapestGroup: {
    left: 41,
  },
  fastest: {
    color: Color.black,
    lineHeight: 20,
    fontSize: 15,
  },
  fastestGroup: {
    left: 205,
  },
  sortingGroup: {
    top: 115,
    left: 5,
    width: 335,
    height: 38,
    position: "absolute",
  },
  headerParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  resultList: {
    backgroundColor: Color.textColorsInverse,
    height: 800,
    width: "100%",
    flex: 1,
  },
});

export default ResultList;
