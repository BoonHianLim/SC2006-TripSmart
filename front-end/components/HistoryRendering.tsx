import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, ListItem } from "@rneui/base";
import React, { useEffect } from "react";
import { Value } from "react-native-reanimated";

const HistoryScroll = ({ item }: any) => {
  console.log("item: ", item);
  const fareText = "$" + item.fare;
  const durationText = item.duration + " min";
  return (
    <ListItem
      onPress={() => console.log("pressed, but should do nothing")}
      bottomDivider
    >
      <Avatar rounded source={{ uri: item.iconURL }} />
      <ListItem.Content>
        <ListItem.Title>{item.serviceType}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Content right>
        <ListItem.Subtitle>
          {fareText} {durationText}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default HistoryScroll;
