import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import React, {useEffect, useState} from "react";
import ListItemScroll from "./ListItemScroll"
import { Result } from "../types/Result"
import {grab} from "../services/grabscrapper";


let resultArr:Result[] = [{
    name: "blueSG",
    iconURL: "https://play-lh.googleusercontent.com/zwdsPEl7NT_TxYjL83V6UnEwZjXljBHcr41o5D41xpqd0JC5odZY--yA9WWWrYIOCWw",
    data: [Promise.resolve(["bluesg",1,7]),
        Promise.resolve(["bluesg",3,6]),
        Promise.resolve(["bluesg",2,5])]
},{
    name: "Grab",
    iconURL: "https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png",
    data: [Promise.resolve(["JustGrab",10,71]),
        Promise.resolve(["GrabCar Premium",0,2]),
        Promise.resolve(["GrabCar Plus",4,16])]
}]



const ResultListResult = ({isCheap}:any) => {
    const [result, setResult] = useState();
    const [resultArr, setResultArr] = useState([]);
    const sortBy = isCheap ? 'fare' : 'duration';

    const refreshData = () => {
        grab.updateResult("Nanyang Technological University",
            "National University Singapore",
            1,
            setResultArr);
    }
    useEffect(() => {
        refreshData()
    }, []);

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
                serviceType:string;
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
                    const [serviceType,duration, fare] = await currData;
                    allData.push({
                        name: result.name,
                        iconURL: result.iconURL,
                        serviceType,
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
                setResult(allData);
            })
            .catch((error) => console.error(error));
    }, [sortBy, resultArr]);

    return (
        <View style={styles.result}>
            {result &&
                result.map((data, index) => (
                    <ListItemScroll
                        key={data.name + data.serviceType + index.toString()}
                        item={data}
                        isCheap={isCheap}
                    />
                ))}
        </View>)
}

const styles = StyleSheet.create({
    result: {
        width: "100%",
    }
});
export default ResultListResult;