import React, { useCallback, useMemo, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import devEnvironmentVariables from "../env";

const App = () => {
  // ref
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "90%"], []);

  // state
  const [searchQuery, setSearchQuery] = useState("");
  const [destQuery, setDestQuery] = useState("");

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  const onChangeDest = (query: React.SetStateAction<string>) =>
    setDestQuery(query);
  // renders
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: 1.3521,
            longitude: 103.8198,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          showsScale={true}
          zoomEnabled={true}
          rotateEnabled={true}
          scrollEnabled={true}
          pitchEnabled={true}
          toolbarEnabled={true}
          cacheEnabled={false}
        />

        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.container2}>
            <GooglePlacesAutocomplete
              placeholder="Starting location"
              query={{
                key: devEnvironmentVariables.GOOGLE_MAPS_API_KEY,
                language: "en", // language of the results
              }}
              onPress={(data, details = null) => console.log(data)}
              onFail={(error) => console.error(error)}
              requestUrl={{
                url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
                useOnPlatform: "web",
              }} // this in only required for use on the web. See https://git.io/JflFv more for details.
              styles={{
                container: {
                  flex: 0,
                },
              }}
            />

            <GooglePlacesAutocomplete
              placeholder="Destination"
              query={{
                key: devEnvironmentVariables.GOOGLE_MAPS_API_KEY,
                language: "en", // language of the results
              }}
              onPress={(data, details = null) => console.log(data)}
              onFail={(error) => console.error(error)}
              requestUrl={{
                url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
                useOnPlatform: "web",
              }} // this in only required for use on the web. See https://git.io/JflFv more for details.
              styles={{
                container: {
                  flex: 0,
                },
              }}
            />
            <Button
              title="Show Result"
              onPress={() => navigation.navigate("ResultList")}
            />
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    height: 40,
  },
  frameContainer: {
    alignSelf: "stretch",
  },
  email: {
    letterSpacing: 0.3,
    textAlign: "left",
    lineHeight: 14,
    color: Color.textColorsLight,
    fontSize: 15,
    alignSelf: "stretch",
  },
  emailTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  textInputContainer: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  container2: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
});

export default App;
