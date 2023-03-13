import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import HomeSection from "../components/HomeSection";
import SettingsSection from "../components/SettingsSection";
import { Color } from "../GlobalStyles";

const SearchPage1 = () => {
  return (
    <View style={styles.searchPage1}>
      <Image
        style={styles.screenshot20230208At1155}
        resizeMode="cover"
        source={require("../assets/screenshot-20230208-at-1155-1.png")}
      />
      <HomeSection />
      <SettingsSection
        productId={require("../assets/ticket2.png")}
        propTop={718}
        propLeft={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenshot20230208At1155: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 565,
    height: 622,
  },
  searchPage1: {
    backgroundColor: Color.textColorsInverse,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default SearchPage1;
