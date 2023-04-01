import * as React from "react";
import { useState, useEffect } from 'react';
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
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsContainer = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const [selectedButton, setSelectedButton] = useState(null);

  const mapName = "ResultList";
  const historyName = "History";
  const settingsName = "Settings";

  const onPressButton = (buttonID) => {
    setSelectedButton(buttonID);
  }

  return (
    <View style={styles.bottomNavigation}>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.iconsSpaceBlock, selectedButton === 3 && styles.iconsParent]}
          onPress={() => {
            onPressButton(3)
            navigation.navigate(mapName)
            }
          }
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
          style={[styles.iconsSpaceBlock, selectedButton === 4 && styles.iconsParent]}
          onPress={() => {
            onPressButton(4)
            navigation.navigate(historyName)
            }
          }
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
          style={[styles.iconsSpaceBlock, selectedButton === 5 && styles.iconsParent]}
          onPress={() => {
            onPressButton(5)
            navigation.navigate(settingsName)
            }
          }
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
    </View>
  );
};

const styles = StyleSheet.create({
  mt8_35: {
    marginTop: "30%",
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
    width: "50%",
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
    left: 3,
    width: "100%",
    paddingLeft: 8,
    paddingRight: 17,
    alignItems: "center",
    backgroundColor: Color.textColorsInverse,
  },
});

export default SettingsContainer;
