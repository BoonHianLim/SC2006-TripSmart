import React, {
    useState,
    useReducer, useMemo, useRef, useCallback, useEffect,
} from "react";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
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
import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {FontFamily, Color, Margin} from "../GlobalStyles";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Constants from "expo-constants";
import * as Location from "expo-location";
import SettingsContainer from "../components/SettingsContainer";
import ResultListScroll from "../components/ResultListScroll";
import ResultFilterScroll from "../components/ResultFilterScroll";
import ResultListResult from "../components/ResultListResult";
import SearchPageScroll from "../components/SearchPageScroll";
import BottomSheet, {BottomSheetScrollView} from "@gorhom/bottom-sheet";
import MapViewDirections from "react-native-maps-directions";
import devEnvironmentVariables from "../env";

const App = () => {
    // bottomSheet
    const snapPoints = useMemo(() => ["25%", "76.5%"], []);
    const bottomSheetRef = useRef<BottomSheet>(null);
    // state
    const [state, setState] = useState("searchPage");
    const [isCheap,setCheap] = useState(true);
    const [startLoc, setStartLoc] = useState("");
    const [destLoc, setDestLoc] = useState("");
    const [origin, setOrigin] = useState<LatLng | null>();
    const [destination, setDestination] = useState<LatLng | null>();
    const [showDirections, setShowDirections] = useState(false);
    const mapRef = useRef<MapView>(null);

    const moveTo = async (position: LatLng) => {
        const camera = await mapRef.current?.getCamera();
        if (camera) {
            camera.center = position;
            mapRef.current?.animateCamera(camera, { duration: 1000 });
        }
    };



    const traceRoute = () => {
        const edgePadding = {
            top: 70,
            right: 70,
            bottom: 70,
            left: 70,
        };

        if (origin && destination) {
            setShowDirections(true);
            mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
        }
    };
    // Monitor changes in the "dest" variable, when "dest" changes, traceroute is called
    useEffect(() => {
        if (origin && destination) {
            traceRoute();
        }
    }, [origin, destination]);

    function setScrollType(scrollType: string) {
        switch (scrollType) {
            case 'searchPage':
                return <SearchPageScroll
                    changeState={setState}
                    setOrigin = {setOrigin}
                    setDestination = {setDestination}
                    moveTo = {moveTo}
                    startLoc = {startLoc}
                    setStartLoc = {setStartLoc}
                    destLoc = {destLoc}
                    setDestLoc = {setDestLoc}
                />
            case 'resultFilter':
                return <ResultFilterScroll changeState={setState}/>
            case 'resultList':
                return <ResultListScroll
                    changeState={setState}
                    isCheap = {isCheap}
                    setCheap = {setCheap}
                />
            default:
                throw new Error();
        }
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <View style={styles.container}>
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: 1.3521,
                        longitude: 103.8198,
                        latitudeDelta: 0.3,
                        longitudeDelta: 0.3,
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
                >
                    {origin && <Marker coordinate={origin} />}
                    {destination && <Marker coordinate={destination} />}
                    {showDirections && origin && destination && (
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={devEnvironmentVariables.GOOGLE_MAPS_API_KEY}
                            strokeColor="#6644ff"
                            strokeWidth={4}
                        />
                    )}
                </MapView>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                >
                    {setScrollType(state)}
                    {state == "resultList" && <BottomSheetScrollView>
                        <ResultListResult
                        isCheap = {isCheap}
                        startLoc = {startLoc}
                        destLoc = {destLoc}
                        />
                    </BottomSheetScrollView>}
                </BottomSheet>
                <View style={styles.settings}/>

            </View>
            <SettingsContainer selectedButton={"Map"}/>
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
    result: {
        width: "100%",
    },
    resultList: {
        backgroundColor: Color.textColorsInverse,
        width: "100%",
        flexDirection: "column",
    },
    sortingHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 20
    },
    header: {
        flexDirection: "row"
    },
    icon: {
        height: "100%",
        width: "100%",
    },
    settings: {},
});
export default App;
