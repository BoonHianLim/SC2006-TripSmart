import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const LoadingScreen = () => {
  return (
    <View style={[styles.loadingScreen, styles.loadingLayout]}>
      <Image
        style={[styles.loadingScreenChild, styles.loadingLayout]}
        resizeMode="cover"
        source={require("../assets/frame-266.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingLayout: {
    width: "100%",
    flex: 1,
  },
  loadingScreenChild: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  loadingScreen: {
    backgroundColor: Color.brandColorsCrayolaYellow,
    height: 800,
  },
});

export default LoadingScreen;
