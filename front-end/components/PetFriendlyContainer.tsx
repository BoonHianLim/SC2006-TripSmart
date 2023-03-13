import * as React from "react";
import { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

type PetFriendlyContainerType = {
  petFriendlyText?: ImageSourcePropType;
  ecoFriendlyText?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const PetFriendlyContainer = ({
  petFriendlyText,
  ecoFriendlyText,
  propTop,
  propLeft,
  propWidth,
}: PetFriendlyContainerType) => {
  const pets1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  const petFriendlyStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.frameParent, styles.ml11]}>
      <View style={styles.pets1Wrapper}>
        <Image
          style={[styles.pets1Icon, pets1IconStyle]}
          resizeMode="cover"
          source={petFriendlyText}
        />
      </View>
      <Text style={[styles.petFriendly, styles.mt12, petFriendlyStyle]}>
        {ecoFriendlyText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12: {
    marginTop: Margin.m_xs,
  },
  pets1Icon: {
    position: "absolute",
    top: 7,
    left: 4,
    width: 45,
    height: 45,
  },
  pets1Wrapper: {
    borderRadius: 24,
    backgroundColor: Color.brandColorsPeachBlossom,
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  petFriendly: {
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.textColorsLighter,
    textAlign: "center",
    width: 110,
  },
  frameParent: {
    borderRadius: 8,
    alignItems: "center",
  },
});

export default PetFriendlyContainer;
