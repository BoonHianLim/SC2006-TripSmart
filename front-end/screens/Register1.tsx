import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import CreateAccountSection from "../components/CreateAccountSection";
import ReTypePasswordContainer from "../components/ReTypePasswordContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.register1, styles.registerLayout]}>
      <View
        style={[
          styles.register11,
          styles.register11Position,
          styles.registerLayout,
        ]}
      >
        <View style={styles.frameParent}>
          <CreateAccountSection />
          <ReTypePasswordContainer />
          <View style={[styles.frameChild, styles.register11Position]} />
          <Pressable
            style={styles.signUpWrapper}
            onPress={() => navigation.navigate("Register2")}
          >
            <Text style={styles.signUp}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerLayout: {
    height: 800,
    backgroundColor: Color.textColorsInverse,
  },
  register11Position: {
    left: 0,
    position: "absolute",
  },
  frameChild: {
    top: 504,
  },
  signUp: {
    top: 17,
    left: 117,
    fontSize: 20,
    letterSpacing: 0.6,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  signUpWrapper: {
    top: 559,
    left: 18,
    borderRadius: 13,
    backgroundColor: Color.goldenrod_300,
    width: 320,
    height: 54,
    position: "absolute",
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  register11: {
    top: 0,
    width: 360,
  },
  register1: {
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default Register1;
