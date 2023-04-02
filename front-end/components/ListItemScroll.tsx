import {Avatar, ListItem} from "@rneui/base";
import React from "react";

const ListItemScroll = (item) => {
    console.log(item)
    return(

    <ListItem bottomDivider>
        <Avatar rounded
<<<<<<< HEAD
                source={{ uri: item.item.iconURL }}/>
        <ListItem.Content>
            <ListItem.Title>{item.item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.item.val1}</ListItem.Subtitle>
=======
                source={{ uri: item.iconURL }}/>
        <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.val1}</ListItem.Subtitle>
>>>>>>> 63b7a03 (feat: for reference bluesg)
        </ListItem.Content>
    </ListItem>)
}

export default ListItemScroll