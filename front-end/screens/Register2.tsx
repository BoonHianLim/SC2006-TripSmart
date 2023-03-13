import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Margin, Color, FontFamily } from "../GlobalStyles";

const Register2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register2}>
      <View style={[styles.register2Inner, styles.frameParentLayout]}>
        <View style={[styles.frameParentPosition, styles.frameParentLayout]}>
          <View style={[styles.maskGroupParent, styles.frameParentPosition]}>
            <Image
              style={styles.maskGroupIcon}
              resizeMode="cover"
              source={require("../assets/mask-group1.png")}
            />
            <View
              style={[
                styles.frameWrapper,
                styles.frameSpaceBlock,
                styles.frameParentPosition,
              ]}
            >
              <View style={styles.faAuthorizationParent}>
                <Text
                  style={[
                    styles.faAuthorization,
                    styles.enterThe5FlexBox,
                    styles.resendCodeTypo1,
                  ]}
                >
                  2-FA Authorization
                </Text>
                <Text
                  style={[
                    styles.enterThe5,
                    styles.mt12_53,
                    styles.enterThe5FlexBox,
                  ]}
                >
                  Enter the 5 digit code sent to your email to verify your
                  account
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                <Text style={[styles.text, styles.textTypo]}>4</Text>
              </View>
              <View
                style={[styles.wrapper, styles.ml9_8, styles.wrapperFlexBox]}
              >
                <Text style={[styles.text, styles.textTypo]}>2</Text>
              </View>
              <View
                style={[styles.wrapper, styles.ml9_8, styles.wrapperFlexBox]}
              >
                <Text style={[styles.text, styles.textTypo]}>0</Text>
              </View>
              <View
                style={[styles.wrapper, styles.ml9_8, styles.wrapperFlexBox]}
              >
                <Text style={[styles.text, styles.textTypo]}>6</Text>
              </View>
              <View
                style={[styles.wrapper, styles.ml9_8, styles.wrapperFlexBox]}
              >
                <Text style={[styles.text4, styles.textTypo]}>9</Text>
              </View>
            </View>
            <View style={[styles.frameParent1, styles.mt35_27]}>
              <View style={styles.didNotReceiveAnOtpWrapper}>
                <Text style={[styles.didNotReceive, styles.resendCodeTypo]}>
                  Did not receive an OTP?
                </Text>
              </View>
              <Text
                style={[
                  styles.resendCode,
                  styles.mt15_68,
                  styles.resendCodeTypo,
                  styles.resendCodeTypo1,
                ]}
              >
                Resend code
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.framePressable, styles.frameSpaceBlock]}
            onPress={() => navigation.navigate("SearchPage1")}
          >
            <View style={[styles.planYourTripWrapper, styles.wrapperFlexBox]}>
              <Text style={styles.planYourTrip}>Plan Your Trip</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt12_53: {
    marginTop: 12.53,
  },
  ml9_8: {
    marginLeft: Margin.m_3xs_8,
  },
  mt15_68: {
    marginTop: 15.68,
  },
  mt35_27: {
    marginTop: 35.27,
  },
  frameParentLayout: {
    height: 832,
    width: 376,
    position: "absolute",
  },
  frameParentPosition: {
    left: 0,
    top: 0,
  },
  frameSpaceBlock: {
    paddingBottom: 50,
    paddingHorizontal: 25,
    position: "absolute",
  },
  enterThe5FlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  resendCodeTypo1: {
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textTypo: {
    display: "none",
    height: 23,
    width: 18,
    textAlign: "left",
    color: Color.textColorsMain,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  resendCodeTypo: {
    lineHeight: 19,
    fontSize: 20,
    textAlign: "left",
  },
  maskGroupIcon: {
    left: 34,
    width: 568,
    height: 379,
    top: 0,
    position: "absolute",
  },
  faAuthorization: {
    lineHeight: 41,
    letterSpacing: -0.3,
    textAlign: "center",
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    fontSize: 29,
  },
  enterThe5: {
    fontSize: 17,
    fontFamily: FontFamily.montserratRegular,
    color: Color.textColorsLight,
    lineHeight: 27,
    letterSpacing: 0.2,
  },
  faAuthorizationParent: {
    width: 357,
    alignItems: "center",
  },
  frameWrapper: {
    width: 449,
    paddingTop: 100,
    alignItems: "center",
  },
  maskGroupParent: {
    height: 296,
    width: 376,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    lineHeight: 29,
    fontSize: 29,
    display: "none",
    height: 23,
    width: 18,
  },
  wrapper: {
    borderRadius: 16,
    backgroundColor: Color.backgroundColorsBackgroundLighter1,
    height: 67,
    padding: 16,
    flex: 1,
  },
  text4: {
    fontSize: 27,
    lineHeight: 27,
  },
  frameContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  didNotReceive: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.textColorsLighter,
  },
  didNotReceiveAnOtpWrapper: {
    flexDirection: "row",
  },
  resendCode: {
    letterSpacing: 0.2,
  },
  frameParent1: {
    alignItems: "center",
  },
  frameGroup: {
    top: 247,
    left: 39,
    width: 353,
    height: 388,
    paddingHorizontal: 24,
    paddingTop: 35,
    paddingBottom: 47,
    alignItems: "center",
    position: "absolute",
  },
  planYourTrip: {
    fontSize: 21,
    letterSpacing: 0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    textAlign: "left",
  },
  planYourTripWrapper: {
    borderRadius: 17,
    backgroundColor: Color.primary500,
    paddingHorizontal: 10,
    paddingVertical: 21,
    alignSelf: "stretch",
  },
  framePressable: {
    top: 682,
    left: 27,
    height: 123,
    paddingTop: 21,
    width: 376,
    backgroundColor: Color.textColorsInverse,
  },
  register2Inner: {
    left: -34,
    top: 0,
  },
  register2: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.textColorsInverse,
  },
});

export default Register2;
