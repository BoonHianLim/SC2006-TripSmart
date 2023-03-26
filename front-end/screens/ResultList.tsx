import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    useEffect,
} from "react";
import {useNavigation} from "@react-navigation/native";
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
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {Searchbar} from "react-native-paper";
import {FontFamily, Color, Margin} from "../GlobalStyles";
import BottomSheet from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import SettingsContainer from "../components/SettingsContainer";
import { bluesg } from "../services/bluesg";
import { ListItem } from "@rneui/base";

// Test Data
const GOOGLE_PLACES_API_KEY = "AIzaSyALnass7RW3hrj9O1KGCf3UzsTznG7axS4";
const start = "Jurong Point";
const end = "NTU Hall of Residence 4";
const promises: Promise<[number,number]>[] = [
  Promise.resolve([1,7]),
  Promise.resolve([3,6]),
  Promise.resolve([2,5])
];

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
  const [sortedValues, setSortedValues] = useState<number[][]>([]);

  async function sortPromisesAscending(promises: Promise<[number, number]>[]) {
    const resolvedValues = await Promise.all(promises);
    return promises.sort((promiseA, promiseB) => {
      const valueA = resolvedValues[promises.indexOf(promiseA)][0];
      const valueB = resolvedValues[promises.indexOf(promiseB)][0];
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    sortPromisesAscending(promises).then(sortedPromises => {
      Promise.all(sortedPromises.map(p => p.then(v => v))).then(values => {
        setSortedValues(values);
      });
    });
  }, []);
/*
  Blue SG code
  useEffect(() => {
    bluesg.getData(start,end).then((data) => {
      setText(data.toString());
    })
  })*/
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
                  style={[styles.leftButton,styles.headerChild]}
                  onPress={() => navigation.navigate("SearchPage1")}
                >
                  <Image
                    style={styles.headerChild}
                    resizeMode="cover"
                    source={require("../assets/arrow-11.png")}
                  />
                </Pressable>
                <Text style={[styles.headerChildText,styles.resultText]}>Results</Text>
                <View style = {{marginLeft:"auto",paddingRight:20}}>
                  <Pressable
                    style={[styles.headerChild,styles.image3]}
                    onPress={() => navigation.navigate("ResultFilter")}
                >
                  <Image
                      style={[styles.headerChild,styles.icon]}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                  />
                </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.sortingGroup}>
              <View style = {styles.sortingHeader}>
                <View style={[styles.groupLayout]}>
                  <Text style={[styles.cheapest, styles.sortingHeaderText]}>
                    Cheapest
                  </Text>
                  <Image
                      style = {styles.sortingHeaderArrow}
                      source={require("../assets/arrow-2.png")}
                  />
                </View>
                <View style={[styles.groupLayout]}>
                  <Text style={[styles.fastest, styles.sortingHeaderText]}>
                    Fastest
                  </Text>
                  <Image
                      style = {styles.sortingHeaderArrow}
                      source={require("../assets/arrow-21.png")}
                  />
                </View>
              </View>
              <View style = {{flexDirection:"row"}}>
              <Image
                  style={styles.border1Icon}
                  source={require("../assets/border-1.png")}
              />
              <Image
                  style={styles.border1Icon}
                  source={require("../assets/border-1.png")}
              />
              </View>
            </View>
            {<View style={styles.result}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>John Doe</ListItem.Title>
                  <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <Text>{text}</Text>
              <View>
                {sortedValues.map((arr, index) => (
                    <Text key={index}>{arr.join(', ')}</Text>
                ))}
              </View>

            </View>}
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
  },
  sortingHeaderArrow: {
    width: "7%",
    height: "100%",
  },
  container2: {

    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: "#ecf0f1",
  },
  sortingHeaderText: {
    lineHeight: 20,
    fontSize: 15,
    paddingRight:20
  },
  border1Icon: {
    height: 16,
  },
  groupLayout: {
    height: "100%",
    width: "40%",
    flexDirection:"row",
    justifyContent:"center"
  },
  resultList: {
    backgroundColor: Color.textColorsInverse,
    width: "100%",
    flexDirection: "column",
  },
  sortingHeader:{
    flexDirection:"row",
    alignItems:"center",
    paddingTop:20
  },
  leftButton:{
    paddingLeft:20
  },
  headerParent: {
    width: "100%"
  },
  fastest: {
    color: Color.black,
  },
  image3: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.05,
  },
  header: {
    flexDirection: "row"
  },
  icon: {
    height: "100%",
    width: "100%",

  },
  headerChild: {
    paddingTop: 20
  },
  headerChildText:{
    paddingTop: 15
  },
  borderorange1Icon: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.003,
  },
  settings: {
  },
  resultText: {
    fontSize:22,
    fontWeight: "700",
    color: Color.black,
    paddingLeft: 20,
  },
  sortingGroup: {
    width: "100%",
    alignItems:"center"
  },
});
export default App;
