import {
    Dimensions,
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
    BackHandler
} from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Color, FontFamily} from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import {grab} from "../services/grabscrapper";
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const promises: Promise<[number,number]>[] = [
    Promise.resolve([1,7]),
    Promise.resolve([3,6]),
    Promise.resolve([2,5])
];
const ResultListScroll = ({changeState, isCheap, setCheap}:any)  => {
    const [sortedValues, setSortedValues] = useState<number[][]>([]);
    const message1 = "Results";
    const message2 = "Cheapest";
    const message3 = "Fastest";
    const [resultText1, setResultText1] = useState(message1);
    const [resultText2, setResultText2] = useState(message2);
    const [resultText3, setResultText3] = useState(message3);

    useFocusEffect(() => {
        AsyncStorage.getItem("language").then((value) => {
            switch(value){
                case 'en':
                    setResultText1(message1);
                    setResultText2(message2);
                    setResultText3(message3);
                    break;
                case 'ch':
                    setResultText1("结果");
                    setResultText2("最便宜");
                    setResultText3("最快");
                    break;
                case 'ms':
                    setResultText1("Hasil");
                    setResultText2("Termurah");
                    setResultText3("Terpantas");
                    break;
                case 'ta':
                    setResultText1("முடிவுகள்");
                    setResultText2("கடைசியான");
                    setResultText3("விரைவான");
                    break;
                default:
                    setResultText1(message1);
                    setResultText2(message2);
                    setResultText3(message3);
            }
        })
        }
    );

    const lightArrowLink = require("../assets/arrow-2.png");
    const dimArrowLink = require("../assets/arrow-21.png");
    const lightBorder = require("../assets/borderorange-1.png");
    const dimBorder = require("../assets/border-1.png");
    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    function handleBackButtonClick() {
        changeState("searchPage")
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    //utility functions
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

    try{
        grab.getGrabFare("Nanyang Technological University",
            "National University Singapore")
    }catch (e){
        console.error(e);
        console.log("grab getGrabFare fail to return. This may because of the flask server is not started, or " +
            "connection issues between the localserver and expo.")
    }

    return (
            <View style={styles.resultList}>
                <View style={styles.headerParent}>
                    <View style={styles.header}>
                        <Pressable
                            style={[styles.leftButton,styles.headerChild]}
                            onPress={() => changeState("searchPage")}
                        >
                            <Image
                                style={styles.headerChild}
                                resizeMode="cover"
                                source={require("../assets/arrow-11.png")}
                            />
                        </Pressable>
                        <Text style={[styles.headerChildText,styles.resultText]}>{resultText1}</Text>
                        <View style = {{marginLeft:"auto",paddingRight:20}}>
                            <Pressable
                                style={[styles.headerChild,styles.image3]}
                                onPress={() => changeState("resultFilter")}
                            >
                                <Image
                                    style={[styles.headerChild,styles.icon]}
                                    resizeMode="cover"
                                    source={require("../assets/image-3.png")}
                                />
                            </Pressable >
                        </View>
                    </View>
                </View>
                <View style={styles.sortingGroup}>
                    <View style = {styles.sortingHeader}>
                        <View style={[styles.groupLayout]}>
                            <Pressable
                                onPress={() => {setCheap(true);
                                }}
                                style = {{flexDirection:"row"}}
                            >
                                <Text style={[isCheap? styles.lightText: styles.dimText, styles.sortingHeaderText]}>
                                {resultText2}
                                </Text>
                                <Image
                                    style = {styles.sortingHeaderArrow}
                                    source={isCheap ? lightArrowLink : dimArrowLink}
                                />
                            </Pressable >
                        </View>
                        <View style={[styles.groupLayout]}>
                            <Pressable
                                onPress={() => {setCheap(false);}}
                                style = {{flexDirection:"row"}}
                            >
                                <Text style={[isCheap? styles.dimText: styles.lightText, styles.sortingHeaderText]}>
                                {resultText3}
                                </Text>
                                <Image
                                    style = {styles.sortingHeaderArrow}
                                    source={isCheap ? dimArrowLink : lightArrowLink}
                                />
                            </Pressable >
                        </View>
                    </View>
                    <View style = {{flexDirection:"row"}}>
                        <Image
                            style={styles.border1Icon}
                            source={isCheap ? lightBorder : dimBorder}
                        />
                        <Image
                            style={styles.border1Icon}
                            source={isCheap ? dimBorder : lightBorder}
                        />
                    </View>
                </View>
            </View>

    )
}


const styles = StyleSheet.create({
    lightText: {
        color: "#f9bb00",
    },
    result: {
        width: "100%",
    },
    sortingHeaderArrow: {
        width: "7%",
        height: "100%",
    },
    sortingHeaderText: {
        lineHeight: 20,
        fontSize: 15,
        paddingRight:20
    },
    border1Icon: {
        height: 2,
    },
    groupLayout: {
        height: "100%",
        width: "40%",
        flexDirection:"row",
        justifyContent:"center",
        paddingBottom: 10
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
    dimText: {
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
        paddingTop: 15,
        paddingLeft: 20,
    },
    resultText: {
        fontSize:22,
        fontWeight: "700",
        color: Color.black,
    },
    sortingGroup: {
        width: "100%",
        alignItems:"center"
    },
});

export default ResultListScroll;