import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, ListItem } from "@rneui/base";
import React, { useEffect } from "react";
import { Value } from "react-native-reanimated";
import { View } from "react-native";

const HistoryScroll = ({ item }: any) => {
  console.log("item", item);

  const fareText = "$" + item.fare;
  const durationText = item.duration + " min";
  return (
    <ListItem
      onPress={() => console.log("pressed, but should do nothing")}
      bottomDivider
    >
      <Avatar rounded source={{ uri: item.url }} />
      <ListItem.Content>
        <ListItem.Title>{item.nameOfApp}</ListItem.Title>
        <ListItem.Subtitle>{item.duration}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Subtitle>{item.fare}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default HistoryScroll;
