import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker } from "react-native-maps";
import { Searchbar } from "react-native-paper";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import devEnvironmentVariables from "../env";
import * as Location from "expo-location";
import { LocationGeofencingEventType } from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MapViewDirections from "react-native-maps-directions";
import getGrabFare from "../services/grabscrapper";
import { googlemap } from "../services/googlemap";
import Geolocation from 'react-native-geolocation-service';

type InputAutocompleteProps = {
    label: string;
    placeholder?: string;
    onPlaceSelected: (details: GooglePlaceDetail | null) => void;
    autoFillRef:any;
};

const SearchPageScroll = ({changeState, setOrigin, setDestination, startLoc,
                              setStartLoc, destLoc, setDestLoc, moveTo,
                              startLocRef, destLocRef}:any) => {
    const [email, setEmail] = useState("");

    const [gpsLoc, setGPSLoc] = useState<[number,number]>([0,0]);

    const [isCurrPosition, setIsCurrPosition] = useState(false)
    const [currPosition, setcurrPosition ] = useState({
        formatted_address: '',
        description: "Current Location",
        geometry: { location: { lat: 0, lng: 0 } },
      });
    
    useEffect(() => {
        console.log('Setting up the CURRPOSSITION');

        googlemap.getAddress(gpsLoc).then((res)=>{
            setcurrPosition({
                formatted_address: res,
                description:  "Current Location"  ,
                geometry: { location: { lat: gpsLoc[0], lng: gpsLoc[1] } },
            })
        }).catch((err)=>{console.log(err)})
    }, []); // Empty dependency array means this effect will only run on mount
    
    var emailAccount: string = "";

    function InputAutocomplete({
                                   label,
                                   placeholder,
                                   onPlaceSelected,
                                   autoFillRef
                               }: InputAutocompleteProps) {
        console.log("ref:",autoFillRef)
        
        const handlePlaceSelected = (currPosition : any) => {
            startLocRef.current?.setAddressText(currPosition?.formatted_address);
        };

        return (
            <>
                <Text>{label}</Text>
                <GooglePlacesAutocomplete
                    ref={autoFillRef}
                    predefinedPlaces={[currPosition]}
                    predefinedPlacesAlwaysVisible={true}
                    styles={{ textInput: styles.input }}
                    placeholder={placeholder || ""}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // testFunc(details);
                        handlePlaceSelected(data)
                    }}
                    query={{
                        key: devEnvironmentVariables.GOOGLE_MAPS_API_KEY,
                        language: "en",
                        components: 'country:sg',
                    }}
                />
            </>
        );
    }

    const testFunc = (       
        details: GooglePlaceDetail | null,
        flag: "origin" | "destination") => {
        const set = flag === "origin" ? setOrigin : setDestination;
        const position = {
            latitude: details?.geometry.location.lat || 0,
            longitude: details?.geometry.location.lng || 0,
        };
        
        
    };

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("not granted!")
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setGPSLoc([location.coords.latitude,location.coords.longitude])
    };

    const getStatus = async () => {
        try {
            const value = await AsyncStorage.getItem("@storage_Key");
            if (value == "Guest") {
                //
            } else {
                //
            }
        } catch (e) {
            // error reading value
        }

        getAccount();
    };

    const getAccount = async () => {
        try {
            const value = await AsyncStorage.getItem("@storage_Email");
            if (value != null) {
                setEmail(value);
                //
            } else console.log("emailAccount is null");
        } catch (e) {
            // error reading value
        }
    };
    //getHistory
    const getHistory = async () => {
        try {
            const response = await fetch(
                "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/find",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Request-Headers": "*",
                        "api-key":
                            "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
                    },

                    body: JSON.stringify({
                        dataSource: "seventh",
                        database: "Account",
                        collection: "History",
                        filter: {
                            email: email,
                        },
                        sort: {
                            completedAt: 1,
                        },
                        limit: 10,
                    }),
                }
            );

            const data = await response.json();
            //to get the result

            if (data != null) {
                console.log("account", emailAccount);
                console.log("data.document", data);
            } else {
                console.log("The user has no history");
            }
        } catch (err) {
            console.log("error saving history: ", err);
        }
    };
    const saveHistory = async () => {
        try {
            const response = await fetch(
                "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/insertOne",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Request-Headers": "*",
                        "api-key":
                            "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
                    },

                    body: JSON.stringify({
                        dataSource: "seventh",
                        database: "Account",
                        collection: "History",
                        document: {
                            email: emailAccount,
                            starting_location: startLoc,
                            destination: destLoc,
                        },
                    }),
                }
            );
            const data = await response.json();
            if (data.document != null) {
                //
            } else {
                //
            }
        } catch (err) {
            console.log("error saving history: ", err);
        }
    };

    const onPlaceSelected = (
        details: GooglePlaceDetail | null,
        flag: "origin" | "destination"
    ) => {
        const set = flag === "origin" ? setOrigin : setDestination;
        const position = {
            latitude: details?.geometry.location.lat || 0,
            longitude: details?.geometry.location.lng || 0,
        };
        set(position);
        moveTo(position);
    };

    return (getLocation(),
        getHistory(),
            (emailAccount = JSON.stringify(emailAccount)),
            getStatus(),
        <View style = {{flex:1}}>
    <View style={styles.searchContainer}>
        <InputAutocomplete
            label="Origin"
            autoFillRef={startLocRef}
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "origin");
                var tmp = JSON.stringify(details.name);
                setStartLoc(tmp);
            }}
        />
        <InputAutocomplete
            label="Destination"
            autoFillRef={destLocRef}
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "destination");
                var tmp1 = JSON.stringify(details.name);
                setDestLoc(tmp1);
            }}
        />
        <TouchableOpacity
            style={styles.buttonResult}
            onPress={() => {
                if(startLoc && destLoc){
                    saveHistory();
                    changeState("resultList");
                }
            }}
        >
            <Text style={styles.buttonTextResult}>Show Result</Text>
        </TouchableOpacity>
        <Text>{gpsLoc.toString()}</Text>
    </View>
        </View>)
}

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
    button: {
        backgroundColor: "#eeeeee",
        paddingVertical: 18,
        marginTop: 16,
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonResult: {
        backgroundColor: "blue",
        color: "white",
        paddingVertical: 18,
        marginTop: 16,
        borderRadius: 4,
        marginBottom: 16,
    },
    buttonText: {
        textAlign: "center",
    },
    buttonTextResult: {
        textAlign: "center",
        color: "white"
    },
    searchContainer: {
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
        padding: 8,
        borderRadius: 8,

    },
    input: {
        borderColor: "#888",
        borderWidth: 1,
    },
});

export default SearchPageScroll