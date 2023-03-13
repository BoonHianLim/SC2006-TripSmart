import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

type SettingsSectionType = {
  productId?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const SettingsSection = ({
  productId,
  propTop,
  propLeft,
}: SettingsSectionType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.frameParent, frameViewStyle]}>
      <View style={[styles.iconsParent, styles.iconsSpaceBlock]}>
        <View style={styles.icons}>
          <Image
            style={styles.mapIcon}
            resizeMode="cover"
            source={require("../assets/map1.png")}
          />
        </View>
        <Text style={[styles.planlg, styles.mt8_35, styles.planlgTypo]}>
          Map
        </Text>
      </View>
      <View style={[styles.iconsGroup, styles.iconsSpaceBlock]}>
        <View style={styles.icons}>
          <Image style={styles.mapIcon} resizeMode="cover" source={productId} />
        </View>
        <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
          History
        </Text>
      </View>
      <View style={styles.frameChild} />
      <View style={[styles.iconsGroup, styles.iconsSpaceBlock]}>
        <View style={styles.icons}>
          <Image
            style={styles.mapIcon}
            resizeMode="cover"
            source={require("../assets/cog-wheel1.png")}
          />
        </View>
        <Text style={[styles.billetter, styles.mt8_35, styles.planlgTypo]}>
          Settings
        </Text>
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
    alignItems: "center",
    width: 74,
  },
  planlgTypo: {
    textAlign: "center",
    lineHeight: 10,
    fontSize: 10,
  },
  mapIcon: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  icons: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  planlg: {
    color: Color.brandColorsNightPurple,
  },
  iconsParent: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    alignItems: "center",
  },
  billetter: {
    color: Color.textColorsLight,
  },
  iconsGroup: {
    alignItems: "center",
  },
  frameChild: {
    display: "none",
    alignItems: "center",
    width: 74,
  },
  frameParent: {
    position: "absolute",
    top: 720,
    left: 14,
    width: 335,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default SettingsSection;
