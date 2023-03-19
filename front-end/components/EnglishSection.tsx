import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Margin, Color, FontFamily, FontSize } from "../GlobalStyles";

const EnglishSection = () => {
  return (
    <View style={[styles.changeLanguageParent, styles.mt_2]}>
      <Text style={[styles.englishTypo, styles.textLayout]}>
        Change Language
      </Text>
      <View style={[styles.frameWrapper, styles.mt24]}>
        <View style={styles.frameParent}>
          <View style={[styles.frameGroup, styles.frameFlexBox]}>
            <View style={[styles.frameContainer, styles.frameFlexBox]}>
              <View style={styles.iconsWrapper}>
                <View style={styles.icons}>
                  <Image
                    style={[styles.minusIcon, styles.minusIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/minus.png")}
                  />
                </View>
              </View>
              <Text
                style={[
                  styles.text,
                  styles.ml29,
                  styles.kmFlexBox,
                  styles.textLayout,
                ]}
              >
                1
              </Text>
              <View
                style={[styles.iconsContainer, styles.ml29, styles.iconsLayout]}
              >
                <View style={styles.icons1}>
                  <Image
                    style={[styles.minusIcon, styles.minusIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/add.png")}
                  />
                </View>
              </View>
            </View>
            <Text
              style={[
                styles.english,
                styles.englishPosition,
                styles.englishTypo,
              ]}
            >
              English
            </Text>
          </View>
          <View
            style={[styles.mapSettings, styles.mt10, styles.englishPosition]}
          >
            <View style={styles.frameView}>
              <View style={[styles.iconsFrame, styles.iconsSpaceBlock]}>
                <View style={[styles.icons2, styles.iconsLayout]}>
                  <Image
                    style={[styles.minusIcon, styles.minusIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/chevron-up.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.frameChild, styles.mt1, styles.minusIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-953.png")}
              />
              <View
                style={[
                  styles.iconsWrapper1,
                  styles.mt1,
                  styles.iconsSpaceBlock,
                ]}
              >
                <View style={[styles.icons2, styles.iconsLayout]}>
                  <Image
                    style={[styles.minusIcon, styles.minusIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/cycle.png")}
                  />
                </View>
              </View>
              <Image
                style={[styles.frameChild, styles.mt1, styles.minusIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector-953.png")}
              />
              <View style={[styles.iconsParent, styles.mt1]}>
                <View style={[styles.icons2, styles.iconsLayout]}>
                  <Image
                    style={[styles.minusIcon, styles.minusIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/walking.png")}
                  />
                </View>
                <Text style={[styles.km, styles.mt6, styles.kmFlexBox]}>
                  <Text style={styles.kmTxt}>
                    <Text style={styles.text1}>2</Text>
                    <Text style={styles.km1}>km</Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml29: {
    marginLeft: Margin.m_10xl,
  },
  mt6: {
    marginTop: Margin.m_7xs,
  },
  mt1: {
    marginTop: Margin.m_12xs,
  },
  mt10: {
    marginTop: Margin.m_3xs,
  },
  mt24: {
    marginTop: Margin.m_5xl,
  },
  textLayout: {
    lineHeight: 14,
    letterSpacing: 0.4,
    fontSize: 14,
  },
  frameFlexBox: {
    zIndex: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  minusIconLayout: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  kmFlexBox: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    color: Color.textColorsMain,
  },
  iconsLayout: {
    height: 28,
    width: 28,
  },
  englishPosition: {
    zIndex: 1,
    position: "absolute",
  },
  englishTypo: {
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  iconsSpaceBlock: {
    paddingBottom: 5,
    paddingTop: 4,
    borderTopRightRadius: 12,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  minusIcon: {
    maxHeight: "100%",
    flex: 1,
  },
  icons: {
    justifyContent: "center",
    height: 16,
    width: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  iconsWrapper: {
    borderRadius: 8,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    padding: 6,
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.metropolisSemibold,
    width: 10,
    justifyContent: "center",
  },
  icons1: {
    top: 6,
    left: 6,
    position: "absolute",
    justifyContent: "center",
    height: 16,
    width: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  iconsContainer: {
    borderRadius: 10,
    backgroundColor: Color.goldenrod_200,
  },
  frameContainer: {
    width: 131,
    display: "none",
  },
  english: {
    top: 0,
    left: 11,
    fontSize: FontSize.bodyLargeBold_size,
    letterSpacing: -0.2,
    lineHeight: 16,
  },
  frameGroup: {
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  icons2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconsFrame: {
    borderTopLeftRadius: 13,
  },
  frameChild: {
    height: 0,
    display: "none",
  },
  iconsWrapper1: {
    borderTopLeftRadius: 12,
    display: "none",
  },
  text1: {
    fontSize: 12,
  },
  km1: {
    fontSize: 8,
  },
  kmTxt: {
    width: "100%",
  },
  km: {
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    height: 9,
    alignSelf: "stretch",
  },
  iconsParent: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    paddingTop: 7,
    paddingBottom: 8,
    paddingHorizontal: 5,
    justifyContent: "center",
    display: "none",
    alignItems: "center",
  },
  frameView: {
    borderRadius: 14,
    paddingTop: 2,
    paddingBottom: 6,
    flex: 1,
    alignItems: "center",
  },
  mapSettings: {
    top: 5,
    left: 256,
    borderRadius: 16,
    backgroundColor: Color.brandColorsCrayolaYellow,
    width: 44,
    height: 39,
    padding: 1,
    flexDirection: "row",
  },
  frameParent: {
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 33,
    },
    shadowRadius: 213,
    elevation: 213,
    shadowOpacity: 1,
    width: 316,
    paddingLeft: 18,
    paddingTop: 16,
    paddingBottom: 16,
  },
  frameWrapper: {
    borderRadius: 24,
    borderStyle: "solid",
    borderColor: "#efeded",
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  changeLanguageParent: {
    height: 134,
    paddingHorizontal: 24,
    paddingVertical: 36,
    zIndex: 3,
    alignSelf: "stretch",
  },
});

export default EnglishSection;
