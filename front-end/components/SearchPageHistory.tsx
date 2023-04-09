import { Avatar, ListItem } from "@rneui/base";
import React, { useEffect } from "react";
import {StyleSheet, Text, View} from "react-native";
import {Color} from "../GlobalStyles";

const SearchPageHistory = ({ startLocRef, destLocRef }: any) => {
    const setLocation = () => {
        startLocRef.current?.setAddressText('Some Text');
        destLocRef.current?.setAddressText('Some Text 2');
    }
    return (
        <View>
            <View>
                <Text style = {styles.headerText}>Suggestion</Text>
            </View>
            <View>
                <ListItem onPress={() => setLocation()} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Origin: Test</ListItem.Title>
                        <ListItem.Title>Destination: Test</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem onPress={() => setLocation()} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Origin: Test</ListItem.Title>
                        <ListItem.Title>Destination: Test</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <ListItem onPress={() => setLocation()} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>Origin: Test</ListItem.Title>
                        <ListItem.Title>Destination: Test</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        letterSpacing: 0,
        lineHeight: 29,
        textAlign: "left",
        fontWeight: "700",
        color: Color.black,
        paddingLeft: 10
    },
})
export default SearchPageHistory;
