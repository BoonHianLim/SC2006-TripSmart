import * as React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const SettingsContainer = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.bottomNavigation}>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.iconsParent, styles.iconsSpaceBlock]}
          onPress={() => navigation.navigate("History")}
        >
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
        </Pressable>
        <Pressable
          style={styles.iconsSpaceBlock}
          onPress={() => navigation.navigate("History")}
        >
          <View style={[styles.icons, styles.iconsFlexBox]}>
            <Image
              style={styles.mapIcon}
              resizeMode="cover"
              source={require("../assets/ticket.png")}
            />
          </View>
          <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
            History
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconsSpaceBlock}
          onPress={() => navigation.navigate("History")}
        >
          <View style={[styles.icons, styles.iconsFlexBox]}>
            <Image
              style={styles.mapIcon}
              resizeMode="cover"
              source={require("../assets/user2.png")}
            />
          </View>
          <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
            Profile
          </Text>
        </Pressable>
        <Pressable
          style={styles.iconsSpaceBlock}
          onPress={() => navigation.navigate("Settings")}
        >
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
        </Pressable>
      </View>
      <View
        style={[
          styles.bottomNavigationInner,
          styles.mt8_35,
          styles.iconsFlexBox,
        ]}
      >
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/vector-392.png")}
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
    alignItems: "center",
  },
  iconsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  planlgTypo: {
    textAlign: "center",
    lineHeight: 10,
    fontSize: 10,
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
  frameChild: {
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
    position: "absolute",
    backgroundColor: Color.textColorsInverse,
  },
});

export default SettingsContainer;
