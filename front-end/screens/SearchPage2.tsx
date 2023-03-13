import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LocationContainer from "../components/LocationContainer";
import SettingsSection from "../components/SettingsSection";
import DestinationContainer from "../components/DestinationContainer";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const SearchPage2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchPage2}>
      <Pressable
        style={[styles.typebuttonType2primaryT, styles.searchFlexBox]}
        onPress={() => navigation.navigate("ResultList")}
      >
        <Text style={[styles.search, styles.searchTypo, styles.searchFlexBox]}>
          Search
        </Text>
      </Pressable>
      <Text style={[styles.suggestion, styles.searchTypo]}>Suggestion:</Text>
      <LocationContainer
        locationText={require("../assets/iconlyboldlocation.png")}
        locationType="Home"
        locationCoordinates={require("../assets/iconlyboldedit.png")}
      />
      <LocationContainer
        locationText={require("../assets/iconlyboldlocation1.png")}
        locationType="Work"
        locationCoordinates={require("../assets/iconlyboldedit1.png")}
        iconlyBoldLocationLeft={194}
      />
      <SettingsSection productId={require("../assets/ticket1.png")} />
      <DestinationContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  searchFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodyLargeBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  search: {
    fontSize: FontSize.bodyLargeBold_size,
    lineHeight: 22,
    color: Color.darkDark3,
    display: "flex",
    height: 22,
    textShadowColor: "rgba(254, 187, 27, 0.25)",
    textShadowOffset: {
      width: 4,
      height: 8,
    },
    textShadowRadius: 24,
    flex: 1,
  },
  typebuttonType2primaryT: {
    top: 636,
    left: 19,
    borderRadius: 100,
    backgroundColor: Color.primary500,
    shadowColor: "rgba(254, 187, 27, 0.25)",
    shadowOffset: {
      width: 4,
      height: 8,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: 313,
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 18,
    position: "absolute",
  },
  suggestion: {
    top: 197,
    left: 17,
    fontSize: 14,
    lineHeight: 20,
    color: Color.black,
    position: "absolute",
  },
  searchPage2: {
    backgroundColor: Color.textColorsInverse,
    width: "100%",
    height: 800,
    flex: 1,
  },
});

export default SearchPage2;
