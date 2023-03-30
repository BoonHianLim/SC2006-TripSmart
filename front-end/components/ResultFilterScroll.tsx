import React, {useEffect} from "react";
import {
    Dimensions,
    StyleSheet,
    View,
    Image,
    Text,
    Pressable,
    BackHandler,
    Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PassengersSection from "../components/PassengersSection";
import EcoFriendlySection from "../components/EcoFriendlySection";
import BottomSheet from "@gorhom/bottom-sheet";
import {useCallback, useMemo, useRef} from "react";
import {Color, FontFamily} from "../GlobalStyles";

const ResultFilterScroll = ({changeState}) => {

    // variables
    const navigation = useNavigation();
    const snapPoints = useMemo(() => ["25%", "76.5%"], []);
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    function handleBackButtonClick() {
        changeState("resultList")
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    return (
        <View style={styles.resultFilter}>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Pressable
                        style={[styles.headerPressArea,styles.headerChild]}
                        onPress={() => changeState("resultList")}
                    >
                        <Image
                            style={styles.backButton}
                            resizeMode="cover"
                            source={require("../assets/arrow-11.png")}
                        />

                    </Pressable>
                    <Text style={[styles.filterText,styles.headerChildText]}>Filter</Text>
                </View>

                <PassengersSection />
                <Image
                    style={styles.frameLayout}
                    resizeMode="cover"
                    source={require("../assets/vector-938.png")}
                />
                <View style={styles.rideTypesWrapper}>
                    <Text style={[styles.rideTypes, styles.rideTypesTypo]}>
                        Ride Types
                    </Text>
                </View>
                <View style ={{paddingBottom:30}}>
                    <EcoFriendlySection/>
                </View>
                <Pressable
                    onPress={() => changeState("resultList")}
                >
                    <View
                        style={[
                            styles.changeEmailWrapper,
                            styles.changeWrapperFlexBox,
                        ]}
                    >
                        <Text style={styles.filterButton}>
                            Apply Filters
                        </Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: "100%"
    },
    header: {
        flexDirection: "row"
    },
    changeEmailWrapper: {
        left: Dimensions.get("window").width * 0.25,
        borderRadius: 16,
        backgroundColor: Color.goldenrod_200,
        width: Dimensions.get("window").width * 0.5,
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    changeWrapperFlexBox: {
        paddingVertical: 16,
        paddingHorizontal: 8,
        height: 60,
        backgroundColor: Color.goldenrod_200,
        borderRadius: 12,
        alignSelf: "stretch",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    filterButton: {
        fontSize: 13,
        lineHeight: 13,
        color: Color.black,
        letterSpacing: 0.4,
        fontFamily: FontFamily.montserratBold,
        fontWeight: "700",
        textAlign: "center",
    },
    mt8_35: {
        marginTop: 8.35,
    },
    frameLayout: {
        height: 1,
        overflow: "hidden",
        maxWidth: "100%",
        alignSelf: "stretch",
        resizeMode: 'stretch'
    },
    rideTypesTypo: {
        fontFamily: FontFamily.montserratBold,
        textAlign: "left",
        fontWeight: "700",
    },
    iconsFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconsSpaceBlock: {
        padding: 8,
        alignItems: "center",
    },
    planlgTypo: {
        textAlign: "center",
        lineHeight: 10,
        fontSize: 10,
    },
    backButton: {
        paddingLeft:20
    },
    filterText: {
        fontSize: 22,
        letterSpacing: 0,
        lineHeight: 29,
        textAlign: "left",
        fontWeight: "700",
        color: Color.black,
        paddingTop: 15
    },
    headerPressArea: {
        paddingLeft:20
    },
    headerChild: {
        paddingTop: 20
    },
    headerChildText:{
        paddingTop: 15,
        paddingLeft: 20,
    },
    rideTypes: {
        fontSize: 14,
        letterSpacing: 0.4,
        lineHeight: 14,
        color: Color.textColorsMain,
    },
    rideTypesWrapper: {
        height: 80,
        paddingHorizontal: 24,
        paddingTop: 20,
        alignSelf: "stretch",
    },
    vectorParent: {
        width: "100%",
        backgroundColor: Color.textColorsInverse,
    },
    applyFilters: {
        fontSize: 17,
        letterSpacing: 0.5,
        lineHeight: 17,
        color: Color.black,
    },
    applyFiltersWrapper: {
        borderRadius: 16,
        backgroundColor: Color.goldenrod_200,
        height: 37,
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
    },
    icons: {
        height: 20,
        flexDirection: "row",
    },
    planlg: {
        color: Color.brandColorsNightPurple,
    },
    iconsParent: {
        backgroundColor: Color.brandColorsCrayolaYellow,
    },
    billetter: {
        color: Color.textColorsLight,
    },
    iconsContainer: {
        display: "none",
    },
    frameParent: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
    },
    frameInner: {
        height: 0,
        display: "none",
    },
    bottomNavigationInner: {
        paddingLeft: 17,
        alignSelf: "stretch",
    },
    bottomNavigation: {
        height: 80,
        paddingLeft: 8,
        paddingRight: 17,
        paddingBottom: 23,
        alignItems: "center",
        backgroundColor: Color.textColorsInverse,
    },
    resultFilter: {
        height: 800,
        width: "100%",
        flex: 1,
        backgroundColor: Color.textColorsInverse,
    },
});

export default ResultFilterScroll;