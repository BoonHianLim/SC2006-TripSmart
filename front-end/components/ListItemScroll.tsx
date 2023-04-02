import {Avatar, ListItem} from "@rneui/base";
import React from "react";

const ListItemScroll = (item) => {
    console.log(item)
    return(

    <ListItem bottomDivider>
        <Avatar rounded
                source={{ uri: item.iconURL }}/>
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.val1}</ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>)
}

export default ListItemScroll