import React, {
  useState,
  useReducer, useMemo, useRef, useCallback,
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
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Constants from "expo-constants";
import SettingsContainer from "../components/SettingsContainer";
import ResultListScroll from "../components/ResultListScroll";
import ResultFilterScroll from "../components/ResultFilterScroll";
import ResultListResult from "../components/ResultListResult";
import { bluesg } from "../services/bluesg";
import { ListItem } from "@rneui/base";
import BottomSheet, {BottomSheetScrollView} from "@gorhom/bottom-sheet";

// Test Data
const GOOGLE_PLACES_API_KEY = "AIzaSyALnass7RW3hrj9O1KGCf3UzsTznG7axS4";
const start = "Jurong Point";
const end = "NTU Hall of Residence 4";


const App = () => {
    // ref
  const snapPoints = useMemo(() => ["25%", "76.5%"], []);
  const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);
    // state
    const [searchQuery, setSearchQuery] = useState("");
    const [destQuery, setDestQuery] = useState("");
    const [state, setState] = useState("resultList");

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    const onChangeDest = (query: React.SetStateAction<string>) =>
        setDestQuery(query);

    function setScrollType(scrollType:string) {
      switch(scrollType) {
        case 'resultFilter':
          return <ResultFilterScroll changeState = {setState}/>
        case 'resultList':
          return <ResultListScroll changeState = {setState}/>
        default:
          throw new Error();
      }
    }

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
            {setScrollType(state)}
          {state == "resultList" && <BottomSheetScrollView>
            <ResultListResult />
          </BottomSheetScrollView>}
        </BottomSheet>
        <View style={styles.settings} />

      </View>
      <SettingsContainer 
        selectedButton = {"Map"}
        />
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
