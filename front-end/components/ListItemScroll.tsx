import { Avatar, ListItem } from "@rneui/base";
import React from "react";
import {deepLinkController} from "../controller/DeepLinkController";
const ListItemScroll = ({ item, isCheap = true }: any) => {
  //call process
  const itemClickedCallBack = async () => {
    //check if they are user or guest
    const isguest = await deepLinkController.isGuest();
    if (!isguest) {
      const email = await deepLinkController.getEmail();
      if(email){
        deepLinkController.handleAddHistory(email, item);
      }
    }
    item.deepLinkFn();
  };

  const fareText = "$" + item.fare;
  const durationText = item.duration + " min";
  return (
      <ListItem onPress={() => itemClickedCallBack()} bottomDivider>
        <Avatar rounded source={{ uri: item.iconURL }} />
        <ListItem.Content>
          <ListItem.Title>{item.serviceType}</ListItem.Title>
          <ListItem.Subtitle>
            {isCheap ? durationText : fareText}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Subtitle>
            {isCheap ? fareText : durationText}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
};

export default ListItemScroll;
