import {Avatar, ListItem} from "@rneui/base";
import React, {useEffect} from "react";

const ListItemScroll = ({ item, isCheap }: any)=> {
    const fareText = "$" + item.fare
    const durationText = item.duration + " min"
    return(

        <ListItem
            onPress={() => console.log("onLongPress()")}
            bottomDivider>
            <Avatar rounded source={{ uri: item.iconURL }} />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{isCheap ? durationText : fareText}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
                <ListItem.Subtitle>{isCheap ? fareText : durationText}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default ListItemScroll

