import React, {
    useEffect, useRef,
    useState,
} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { FontFamily, Color, Margin } from "../GlobalStyles";
import {GooglePlaceDetail, GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import devEnvironmentVariables from "../env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import {gpsController} from "../controller/GPSController";
import en from '../locales/en.json';
import ch from '../locales/ch.json';
import ms from '../locales/ms.json';
import ta from '../locales/ta.json';
import {googlemap} from "../services/googlemap";


type InputAutocompleteProps = {
    label: string;
    placeholder?: string;
    onPlaceSelected: (details: GooglePlaceDetail | null) => void;
    originRef: any;
};

function InputAutocomplete({
                               label,
                               placeholder,
                               onPlaceSelected,
                               originRef = null
                           }: InputAutocompleteProps) {
    return originRef ? (
        <>
            <Text>{label}</Text>
            <GooglePlacesAutocomplete
                ref = {originRef}
                styles={{ textInput: styles.input }}
                placeholder={placeholder || ""}
                fetchDetails
                onPress={(data, details = null) => {
                    onPlaceSelected(details);
                }}
                query={{
                    key: devEnvironmentVariables.GOOGLE_MAPS_API_KEY,
                    language: "en",
                    components: 'country:sg',
                }}
            />
        </>
    ) :
        (
            <>
                <Text>{label}</Text>
                <GooglePlacesAutocomplete
                    styles={{ textInput: styles.input }}
                    placeholder={placeholder || ""}
                    fetchDetails
                    onPress={(data, details = null) => {
                        onPlaceSelected(details);
                    }}
                    query={{
                        key: devEnvironmentVariables.GOOGLE_MAPS_API_KEY,
                        language: "en",
                        components: 'country:sg',
                    }}
                />
            </>
        )
}


const messages = {
    en,
    ch,
    ms,
    ta
};


const SearchPageScroll = ({changeState, setOrigin, setDestination, startLoc, setStartLoc, destLoc, setDestLoc, moveTo}:any) => {
    const [gpsLoc,setGPSLoc] = useState<any>();
    const message = "Show Result";
    const flag1 = "Origin";
    const flag2 = "Destination";
    const [resultText, setResultText] = useState<any>();
    const originRef = useRef();

    useFocusEffect(() => {
        AsyncStorage.getItem("language").then((value) => {
            switch(value){
                case 'en':
                    setResultText(messages.en["Search_page"]);
                    break;
                case 'ch':
                    setResultText(messages.ch["Search_page"]);
                    break;
                case 'ms':
                    setResultText(messages.ms["Search_page"]);
                    break;
                case 'ta':
                    setResultText(messages.ta["Search_page"]);
                    break;
                default:
                    setResultText(messages.en["Search_page"]);
            }
        })
    })

    useEffect(() => {
        //reset the hooks when it is re-render
        setStartLoc("")
        setDestLoc("")
        setOrigin()
        setDestination()

        //get the location
        gpsController.fetchLocation().then((data) => {
            setGPSLoc(data)
        });

    },[]);

    useEffect(() => {
        if(gpsLoc) {
            googlemap.getAddress([gpsLoc.coords.latitude, gpsLoc.coords.longitude])
                .then((curLocText) => {
                    originRef.current?.setAddressText(curLocText);
                    setOrigin({latitude:gpsLoc.coords.latitude,
                        longitude:gpsLoc.coords.longitude});
                    setStartLoc(curLocText);
                })

        }

    },[gpsLoc])

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

    return (
            <View style = {{flex:1}}>
    <View style={styles.searchContainer}>
        <InputAutocomplete
            label={resultText && resultText[flag1]}
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "origin");
                setStartLoc(details.formatted_address);
            }}
            originRef = {originRef}
        />
        <InputAutocomplete
            label={resultText && resultText[flag2]}
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "destination");
                setDestLoc(details.formatted_address);
            }}
            originRef = {null}
        />
        <TouchableOpacity
            style={styles.buttonResult}
            onPress={() => {
                if(startLoc && destLoc){
                    changeState("resultList");
                }
            }}
        >
            <Text style={styles.buttonTextResult}>
                {resultText && resultText[message]}
            </Text>
        </TouchableOpacity>
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
        color: "white",
        fontSize: 15
    },
    searchContainer: {
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        padding: 8,
        borderRadius: 8,
    },
    input: {
        borderColor: "#888",
        borderWidth: 1,
    },
});

export default SearchPageScroll