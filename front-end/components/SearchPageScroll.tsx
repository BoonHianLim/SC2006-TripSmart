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

type InputAutocompleteProps = {
    label: string;
    placeholder?: string;
    onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({
                               label,
                               placeholder,
                               onPlaceSelected,
                           }: InputAutocompleteProps) {
    return (
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
                    key: devEnvironmentVariables.GOOGLE_MAP_API_KEY,
                    language: "pt-BR",
                }}
            />
        </>
    );
}

const SearchPageScroll = ({changeState, setOrigin, setDestination, moveTo}:any) => {
    const [email, setEmail] = useState("");
    const [startLocation, setLocationFunction] = useState("");
    const [dest, setDestFunction] = useState("");
    const [resultText, setResultText] = useState("");

    var emailAccount: string = "";
    // get current status, is it a guess or user

    AsyncStorage.getItem("language").then((value) => {
        if (value == 'en'){
            setResultText("Show Result")
        } 
        else if (value == 'ch'){
            setResultText("显示结果")
        } 
        else if (value == 'ms'){
            setResultText("Paparkan Hasil")
        } 
        else if (value == 'ta'){
            setResultText("முடிவு காட்டு")
        } 
    })

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
                            starting_location: startLocation,
                            destination: dest,
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

    return (
        getHistory(),
            (emailAccount = JSON.stringify(emailAccount)),
            getStatus(),
    <View style={styles.searchContainer}>
        <InputAutocomplete
            label="Origin"
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "origin");
                var tmp = JSON.stringify(details.name);
                setLocationFunction(tmp);
            }}
        />
        <InputAutocomplete
            label="Destination"
            onPlaceSelected={(details) => {
                onPlaceSelected(details, "destination");
                var tmp1 = JSON.stringify(details.name);
                setDestFunction(tmp1);
            }}
        />
        <TouchableOpacity
            style={styles.buttonResult}
            onPress={() => {
                saveHistory();
                changeState("resultList");
            }}
        >
            <Text style={styles.buttonTextResult}>
                {resultText}
            </Text>
        </TouchableOpacity>
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
        top: Constants.statusBarHeight,
    },
    input: {
        borderColor: "#888",
        borderWidth: 1,
    },
});

export default SearchPageScroll