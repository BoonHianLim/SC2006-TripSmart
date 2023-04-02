import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import React, {useEffect, useState} from "react";
import ListItemScroll from "./ListItemScroll"

type Result = {
    name: string;
    iconURL: string;
    data: Promise<[number,number]>[];
};

let resultArr:Result[] = [{
    name: "blusg",
    iconURL: "https://www.bluesg.com.sg/sites/bluesg/files/medias/images/logo_bluesg_-_header_site.png",
    data: [Promise.resolve([1,7]),
        Promise.resolve([3,6]),
        Promise.resolve([2,5])]
},{
    name: "grab",
    iconURL: "https://www.bluesg.com.sg/sites/bluesg/files/medias/images/logo_bluesg_-_header_site.png",
    data: [Promise.resolve([10,71]),
        Promise.resolve([0,2]),
        Promise.resolve([4,16])]
}]



const ResultListResult = () => {
    const [result,setResult] = useState()
    useEffect(() => {
        async function printSortedData(): Promise<any> {
            const sortedData = resultArr.flatMap((result) => result.data).sort(async (dataA, dataB) => {
                const [valA1, valA2] = await dataA;
                const [valB1, valB2] = await dataB;
                return valA1 - valB1;
            });

            const allData: { name: string; iconURL: string; val1: number; val2: number }[] = [];

            for (let i = 0; i < resultArr.length; i++) {
                const result = resultArr[i];
                const data = result.data;
                const firstData = await data[0];
                const [firstVal1, firstVal2] = await firstData;

                for (let j = 0; j < data.length; j++) {
                    const currData = data[j];
                    const [val1, val2] = await currData;
                    allData.push({
                        name: result.name,
                        iconURL: result.iconURL,
                        val1,
                        val2,
                    });
                }
            }

            allData.sort((dataA, dataB) => dataA.val1 - dataB.val1);
            return allData
        }

        printSortedData().then((allData) => {
            console.log(allData)
            setResult(allData)
        }).catch((error) => console.error(error))
    }, []);

    return(
    <View style={styles.result}>
        {result && result.map((data, index) => (
            <ListItemScroll
                key = {data.name + index.toString() + data.val1.toString()}
                item = {data}
            />
        ))}
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
{/*    <View>
        {sortedValues.map((arr, index) => (
            <Text key={index}>{arr.join(', ')}</Text>
        ))}
    </View>*/}
</View>)
}

const styles = StyleSheet.create({
    result: {
        width: "100%",
    }
});
export default ResultListResult;