import {Dimensions, StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem} from "@rneui/base";
import React, {useEffect, useState} from "react";
import ListItemScroll from "./ListItemScroll"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {grab} from "../services/grabscrapper";
import {bluesg} from "../services/bluesg";
import {publictransport} from "../services/publictransport";
import {taxi} from "../services/taxi";

const removeItem = (array:any[],item:any) => {
    const index = array.indexOf(item);
    if(index != -1){
        array = array.splice(index, 1);
    }
}
const ResultListResult = ({isCheap, startLoc, destLoc}:any) => {
    const [result, setResult] = useState();
    const [resultArr, setResultArr] = useState([]);
    const sortBy = isCheap ? 'fare' : 'duration';

    const refreshData = (apis:any[],pax: number) => {
        apis.forEach((api) => {
            api.updateResult(startLoc,
                destLoc,
                pax,
                setResultArr);
        })

    }
    useEffect(() => {
        AsyncStorage.multiGet(["isWCSelected","isPSelected","isEFSelected"])
            .then(response => {
                let apis = [grab, publictransport, bluesg, taxi]
                if(response[0][1] === 'true'){
                    removeItem(apis,grab)
                    removeItem(apis,bluesg)
                    removeItem(apis,taxi)
                }
                if(response[1][1] === 'true'){
                    removeItem(apis,grab)
                    removeItem(apis,publictransport)
                    removeItem(apis,taxi)
                }
                if(response[2][1] === 'true'){
                    removeItem(apis,grab)
                    removeItem(apis,taxi)
                }

                AsyncStorage.getItem("num").then((value) => {
                    if(value != null){
                        refreshData(apis,parseInt(value))
                    }else{
                        refreshData(apis,1)
                    }
                })
            })
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