import {Dimensions, Image, Pressable, StyleSheet, Text, View, TouchableHighlight, ScrollView } from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import BottomSheet from "@gorhom/bottom-sheet";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Color, FontFamily} from "../GlobalStyles";
import {useNavigation} from "@react-navigation/native";
import ResultListScroll from "../components/ResultListScroll";

const Test = ()=> {
    return (<ScrollView>
        <View style={styles.result}>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John Doe</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
                <Avatar rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}/>
                <ListItem.Content>
                    <ListItem.Title>John ABC</ListItem.Title>
                    <ListItem.Subtitle>CEO, Example.com</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </View>
    </ScrollView>)
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

export default Test;