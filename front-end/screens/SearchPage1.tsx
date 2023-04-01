import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigation } from "@react-navigation/native";
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

const App = () => {
  const [email, setEmail] = useState("");

  // ref
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "90%"], []);

  // state
  const [searchQuery, setSearchQuery] = useState("");
  const [destQuery, setDestQuery] = useState("");

  //starting location and destination
  const [startLocation, setLocationFunction] = useState("");
  const [dest, setDestFunction] = useState("");

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  const onChangeDest = (query: React.SetStateAction<string>) =>
    setDestQuery(query);

  // GPS
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  var longitude;
  var latitude;

  var emailAccount: string = "";

  // get current status, is it a guess or user
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

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    longitude = location.coords.longitude;
    latitude = location.coords.latitude;
    text = JSON.stringify(location);
    {
      /* Example of text: {"timestamp":1680016517725,"mocked":false,"coords":{"altitude":24.899999618530273,"heading":253.0059356689453,"altitudeAccuracy":0.9424006938934326,"latitude":1.3542925,"speed":0.26373162865638733,"longitude":103.6865875,"accuracy":10.979000091552734}} */
    }
  }

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

  //saveHistory
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

  // renders
  return (
    getHistory(),
    (emailAccount = JSON.stringify(emailAccount)),
    getStatus(),
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
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

          <View>
            <Text>
              {console.log(
                "Your current lattitude is " +
                  latitude +
                  ", current longtitude is " +
                  longitude
              )}
            </Text>
          </View>

          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.searchContainer}>
              <InputAutocomplete
                label="Origin"
                onPlaceSelected={(details) => {
                  onPlaceSelected(details, "origin");
                  //console.log("details", details);
                  var tmp = JSON.stringify(details.name);
                  //console.log("origin", tmp);
                  setLocationFunction(tmp);
                }}
              />
              <InputAutocomplete
                label="Destination"
                onPlaceSelected={(details) => {
                  onPlaceSelected(details, "destination");
                  //console.log("dest_details", details);
                  var tmp1 = JSON.stringify(details.name);
                  //console.log("dest", tmp1);
                  setDestFunction(tmp1);
                }}
              />
              <TouchableOpacity style={styles.button} onPress={traceRoute}>
                <Text style={styles.buttonText}>Trace route</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonResult}
                onPress={() => {
                  saveHistory()
                  navigation.navigate("ResultList")
                }
              }
              >
                <Text style={styles.buttonTextResult}>Show Result</Text>
              </TouchableOpacity>
            </View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    )
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

export default App;
