import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const BottomNavigationContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.bottomNavigation, styles.mt_2]}>
      <View style={styles.frameParent}>
        <View style={[styles.iconsParent, styles.iconsSpaceBlock]}>
          <View style={styles.icons}>
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
        <View style={[styles.iconsGroup, styles.iconsSpaceBlock]}>
          <View style={styles.icons}>
            <Image
              style={styles.mapIcon}
              resizeMode="cover"
              source={require("../assets/ticket.png")}
            />
          </View>
          <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
            History
          </Text>
        </View>
        <View style={[styles.iconsContainerFlexBox, styles.iconsSpaceBlock]}>
          <View style={styles.icons}>
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
        <Pressable
          style={[styles.iconsParent, styles.iconsSpaceBlock]}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.icons}>
            <Image
              style={styles.mapIcon}
              resizeMode="cover"
              source={require("../assets/cog-wheel.png")}
            />
          </View>
          <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
            Settings
          </Text>
        </Pressable>
      </View>
      <View
        style={[
          styles.bottomNavigationInner,
          styles.mt8_35,
          styles.iconsContainerFlexBox,
        ]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-39.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt8_35: {
    marginTop: 8.35,
  },
  iconsSpaceBlock: {
    padding: 8,
    width: 74,
  },
  planlgTypo: {
    textAlign: "center",
    lineHeight: 10,
    fontSize: 10,
  },
  iconsContainerFlexBox: {
    display: "none",
    alignItems: "center",
  },
  mapIcon: {
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
  },
  icons: {
    width: 20,
    height: 20,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  planlg: {
    color: Color.brandColorsNightPurple,
  },
  iconsParent: {
    alignItems: "center",
  },
  billetter: {
    color: Color.textColorsLight,
  },
  iconsGroup: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 89,
    height: 0,
  },
  bottomNavigationInner: {
    paddingLeft: 17,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  bottomNavigation: {
    position: "absolute",
    top: 734,
    left: 0,
    backgroundColor: Color.textColorsInverse,
    width: 360,
    height: 132,
    paddingLeft: 8,
    paddingRight: 17,
    paddingBottom: 23,
    zIndex: 8,
    alignItems: "center",
  },
});

export default BottomNavigationContainer;
