import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

type EmailContainerType = {
  passwordInput?: string;
  passwordConfirmationInput?: ImageSourcePropType;
  passwordHashInput?: ImageSourcePropType;
  passwordSaltInput?: ImageSourcePropType;
};

const EmailContainer = ({
  passwordInput,
  passwordConfirmationInput,
  passwordHashInput,
  passwordSaltInput,
}: EmailContainerType) => {
  return (
    <View style={[styles.passwordParent, styles.mt27_04]}>
      <Text style={styles.password}>{passwordInput}</Text>
      <View
        style={[styles.frameParent, styles.mt12_02, styles.iconsFrameFlexBox]}
      >
        <View style={[styles.iconsWrapper, styles.iconsFrameFlexBox]}>
          <View style={[styles.icons, styles.iconsFrameFlexBox]}>
            <Image
              style={[styles.lockIcon, styles.lockIconLayout]}
              resizeMode="cover"
              source={passwordConfirmationInput}
            />
          </View>
        </View>
        <Image
          style={[styles.frameChild, styles.lockIconLayout]}
          resizeMode="cover"
          source={passwordHashInput}
        />
        <View style={[styles.frameGroup, styles.iconsFrameFlexBox]}>
          <View style={styles.rectangleParent}>
            <View style={styles.frameItem} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
            <View style={[styles.frameItem, styles.ml6_01]} />
          </View>
          <View style={[styles.icons, styles.iconsFrameFlexBox]}>
            <Image
              style={[styles.lockIcon, styles.lockIconLayout]}
              resizeMode="cover"
              source={passwordSaltInput}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6_01: {
    marginLeft: 6.01,
  },
  mt12_02: {
    marginTop: 12.02,
  },
  iconsFrameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  lockIconLayout: {
    maxHeight: "100%",
    alignSelf: "stretch",
  },
  password: {
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.textColorsLight,
    textAlign: "left",
    alignSelf: "stretch",
  },
  lockIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  icons: {
    width: 21,
    height: 21,
    justifyContent: "center",
  },
  iconsWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  frameChild: {
    width: 2,
  },
  frameItem: {
    borderRadius: 7511,
    backgroundColor: Color.textColorsMain,
    width: 6,
    height: 6,
    display: "none",
  },
  rectangleParent: {
    flexDirection: "row",
  },
  frameGroup: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: "space-between",
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    borderRadius: 12,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    height: 45,
    alignSelf: "stretch",
  },
  passwordParent: {
    alignSelf: "stretch",
  },
});

export default EmailContainer;
