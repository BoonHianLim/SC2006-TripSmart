import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Pressable,
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import SettingsContainer from "../components/SettingsContainer";
import { bluesg } from "../services/bluesg";


const GOOGLE_PLACES_API_KEY = "AIzaSyALnass7RW3hrj9O1KGCf3UzsTznG7axS4";
const start = "Jurong Point"
const end = "NTU Hall of Residence 4"

const App = () => {
  // ref
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "76.5%"], []);

  // state
  const [searchQuery, setSearchQuery] = useState("");
  const [destQuery, setDestQuery] = useState("");

  const [text, setText] = useState('');
  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

  const onChangeDest = (query: React.SetStateAction<string>) =>
      setDestQuery(query);

  useEffect(() => {
    bluesg.getData(start,end).then((data) => {
      setText(data.toString());
    })
  })
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
            <View style={styles.resultList}>
              <View style={styles.headerParent}>
                <View style={styles.header}>
                  <Pressable
                      style={styles.image3}
                      onPress={() => navigation.navigate("ResultFilter")}
                  >
                    <Image
                        style={styles.icon}
                        resizeMode="cover"
                        source={require("../assets/image-3.png")}
                    />
                  </Pressable>
                  <Image
                      style={styles.headerChild}
                      resizeMode="cover"
                      source={require("../assets/arrow-11.png")}
                  />
                  <Text style={styles.resultText}>Results</Text>
                </View>
                <View style={styles.sortingGroup}>
                  <Image
                      style={styles.borderorange1Icon}
                      resizeMode="cover"
                      source={require("../assets/borderorange-1.png")}
                  />
                  <Image
                      style={styles.border1Icon}
                      resizeMode="cover"
                      source={require("../assets/border-1.png")}
                  />
                  <View style={[styles.cheapestGroup, styles.groupLayout]}>
                    <Image
                        style={styles.cheapestGroupChild}
                        resizeMode="cover"
                        source={require("../assets/arrow-2.png")}
                    />
                    <Text style={[styles.cheapest, styles.fastestTypo]}>
                      Cheapest
                    </Text>
                  </View>
                  <View style={[styles.fastestGroup, styles.groupLayout]}>
                    <Image
                        style={styles.cheapestGroupChild}
                        resizeMode="cover"
                        source={require("../assets/arrow-21.png")}
                    />
                    <Text style={[styles.fastest, styles.fastestTypo]}>
                      Fastest
                    </Text>
                  </View>
                </View>
              </View>
              <View style = {styles.result}>
                <Text>{text}</Text>
              </View>
              <SettingsContainer />
            </View>
          </BottomSheet>
          <View style={styles.settings} />
          <SettingsContainer />
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
  cheapest: {
    color: "#f9bb00",
  },
  result: {
    width: "100%",
    flex: 4,
  },
  fastestGroup: {
    left: Dimensions.get("window").width * 0.5,
  },
  cheapestGroupChild: {
    top: 5,
    left: 95,
    width: Dimensions.get("window").width * 0.01,
    height: Dimensions.get("window").height * 0.012,
    position: "absolute",
  },
  container2: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
  fastestTypo: {
    lineHeight: 20,
    fontSize: 15,
    left: 0,
    textAlign: "left",
    letterSpacing: 0,
    top: 0,
    position: "absolute",
  },
  border1Icon: {
    top: Dimensions.get("window").height * 0.024,
    left: Dimensions.get("window").width * 0.4,
    width: Dimensions.get("window").width * 0.4,
    height: 16,
    position: "absolute",
  },
  groupLayout: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width * 0.4,
    top: 0,
    position: "absolute",
  },
  resultList: {
    backgroundColor: Color.textColorsInverse,
    height: Dimensions.get("window").height,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  headerParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  fastest: {
    color: Color.black,
    lineHeight: 20,
    fontSize: 15,
  },
  image3: {
    left: Dimensions.get("window").width * 0.78,
    width: Dimensions.get("window").width * 0.1,
    top: 0,
    height: Dimensions.get("window").height * 0.05,
    position: "absolute",
  },
  cheapestGroup: {
    left: 41,
  },
  header: {
    top: Dimensions.get("window").height * 0.01,
    left: Dimensions.get("window").width * 0.05,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.05,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  headerChild: {
    top: Dimensions.get("window").height * 0.01,
    left: Dimensions.get("window").width * 0.005,
    width: Dimensions.get("window").width * 0.06,
    height: Dimensions.get("window").height * 0.022,
    position: "absolute",
  },
  borderorange1Icon: {
    top: Dimensions.get("window").height * 0.032,
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.003,
    left: 0,
    position: "absolute",
  },
  settings: {
    top: Dimensions.get("window").height,
  },
  resultText: {
    top: 6,
    left: 39,
    fontSize: 22,
    lineHeight: 29,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  sortingGroup: {
    top: Dimensions.get("window").height * 0.08,
    left: Dimensions.get("window").width * 0.08,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
});
export default App;
