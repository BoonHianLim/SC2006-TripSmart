import React, {
    useState,
    useReducer, useMemo, useRef, useCallback, useEffect,
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
import { taxi } from "../services/taxi";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
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
import {grab} from "../services/grabscrapper";


const App = () => {
    // ref
    const snapPoints = useMemo(() => ["25%", "76.5%"], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);
    // state
    const [state, setState] = useState("searchPage");
    const [isCheap,setCheap] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");
    const [location, setLocation] = useState(null);
    var longitude;
    var latitude;

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if (location) {
        longitude = location.coords.longitude;
        latitude = location.coords.latitude;
    }

    //markers
    const [origin, setOrigin] = useState<LatLng | null>();
    const [destination, setDestination] = useState<LatLng | null>();
    const [showDirections, setShowDirections] = useState(false);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const mapRef = useRef<MapView>(null);

    const moveTo = async (position: LatLng) => {
        const camera = await mapRef.current?.getCamera();
        if (camera) {
            camera.center = position;
            mapRef.current?.animateCamera(camera, { duration: 1000 });
        }
    };

    const edgePaddingValue = 70;

    const edgePadding = {
        top: edgePaddingValue,
        right: edgePaddingValue,
        bottom: edgePaddingValue,
        left: edgePaddingValue,
    };

    const traceRouteOnReady = (args: any) => {
        if (args) {
            // args.distance
            // args.duration
            setDistance(args.distance);
            setDuration(args.duration);
        }
    };

    const traceRoute = () => {
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
<<<<<<< HEAD

=======
    //console.log(taxi.getData);
>>>>>>> 204e9f2 (taxi_update)
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
                            apikey={devEnvironmentVariables.GOOGLE_MAP_API_KEY}
                            strokeColor="#6644ff"
                            strokeWidth={4}
                            onReady={traceRouteOnReady}
                        />
                    )}
                </MapView>
                <BottomSheet
                    ref={bottomSheetRef}
                    index={1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                >
                    {setScrollType(state)}
                    {state == "resultList" && <BottomSheetScrollView>
                        <ResultListResult
                        isCheap = {isCheap}
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
        paddingRight: 20
    },
    border1Icon: {
        height: 16,
    },
    groupLayout: {
        height: "100%",
        width: "40%",
        flexDirection: "row",
        justifyContent: "center"
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
    leftButton: {
        paddingLeft: 20
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
    headerChildText: {
        paddingTop: 15
    },
    borderorange1Icon: {
        width: Dimensions.get("window").width * 0.4,
        height: Dimensions.get("window").height * 0.003,
    },
    settings: {},
    resultText: {
        fontSize: 22,
        fontWeight: "700",
        color: Color.black,
        paddingLeft: 20,
    },
    sortingGroup: {
        width: "100%",
        alignItems: "center"
    },
});
export default App;
