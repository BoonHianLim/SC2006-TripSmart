import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ListItemScroll from "./ListItemScroll";
import {ResultItem} from "../types/ResultItem";
import {Result} from "../types/Result";
import {transportAPIController} from "../controller/TransportAPIController"

const ResultListResult = ({ isCheap, startLoc, destLoc }: any) => {
  const [sortedResultArr, setsortedResultArr] = useState<ResultItem[]>([]);
  const [resultArr, setResultArr] = useState<Result[]>([]);
  const sortBy = isCheap ? "fare" : "duration";

  useEffect(() => {
    transportAPIController.fetchData(startLoc,destLoc,setResultArr)
  }, []);

  useEffect(() => {
    transportAPIController.sortData(resultArr,sortBy,setsortedResultArr)
  }, [sortBy, resultArr]);

  return (
    <View style={styles.result}>
      {sortedResultArr &&
          sortedResultArr.map((data:any, index:number) => (
          <ListItemScroll
            key={data.name + data.serviceType + index.toString()}
            item={data}
            isCheap={isCheap}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  result: {
    width: "100%",
  },
});
export default ResultListResult;
