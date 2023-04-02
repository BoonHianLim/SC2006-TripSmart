import {Avatar, ListItem} from "@rneui/base";
import React from "react";

const ListItemScroll = (item) => {
    console.log(item)
    return(

    <ListItem bottomDivider>
        <Avatar rounded
                source={{ uri: item.item.iconURL }}/>
        <ListItem.Content>
            <ListItem.Title>{item.item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.item.val1}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>)
}

export default ListItemScroll