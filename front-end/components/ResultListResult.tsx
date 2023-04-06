import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import React, {useEffect, useState} from "react";
import ListItemScroll from "./ListItemScroll"
import { Result } from "../types/Result"


let resultArr:Result[] = [{
    name: "blusg",
    iconURL: "https://play-lh.googleusercontent.com/zwdsPEl7NT_TxYjL83V6UnEwZjXljBHcr41o5D41xpqd0JC5odZY--yA9WWWrYIOCWw",
    data: [Promise.resolve([1,7]),
        Promise.resolve([3,6]),
        Promise.resolve([2,5])]
},{
    name: "Grab",
    iconURL: "https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png",
    data: [Promise.resolve([10,71]),
        Promise.resolve([0,2]),
        Promise.resolve([4,16])]
}]



const ResultListResult = ({isCheap}:any) => {
    const [result, setResult] = useState();
    const sortBy = isCheap ? 'fare' : 'duration';

    useEffect(() => {
        async function printSortedData(sortBy: string): Promise<any> {
            const sortedData = resultArr
                .flatMap((result) => result.data)
                .sort(async (dataA, dataB) => {
                    const [valA1, valA2] = await dataA;
                    const [valB1, valB2] = await dataB;
                    return sortBy === 'duration' ? valA1 - valB1 : valA2 - valB2;
                });

            const allData: {
                name: string;
                iconURL: string;
                duration: number;
                fare: number;
            }[] = [];

            for (let i = 0; i < resultArr.length; i++) {
                const result = resultArr[i];
                const data = result.data;
                const firstData = await data[0];
                const [firstVal1, firstVal2] = await firstData;

                for (let j = 0; j < data.length; j++) {
                    const currData = data[j];
                    const [duration, fare] = await currData;
                    allData.push({
                        name: result.name,
                        iconURL: result.iconURL,
                        duration,
                        fare,
                    });
                }
            }

            allData.sort((dataA, dataB) =>
                sortBy === 'duration'
                    ? dataA.duration - dataB.duration
                    : dataA.fare - dataB.fare
            );
            return allData;
        }

        printSortedData(sortBy)
            .then((allData) => {
                console.log(allData);
                setResult(allData);
            })
            .catch((error) => console.error(error));
    }, [sortBy]);

    return (
        <View style={styles.result}>
            {result &&
                result.map((data, index) => (
                    <ListItemScroll
                        key={data.name + index.toString() + data.duration.toString()}
                        item={data}
                        isCheap={isCheap}
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