import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, ListItem } from "@rneui/base";
import React from "react";

const ListItemScroll = ({ item, isCheap = true }: any) => {
  //triggered when itemClicked, ensure that they r all updated before calling adding into database

  //call process
  const itemClickedCallBack = async () => {
    //check if they are user or guest
    const isguest = await isGuest();
    if (!isguest) {
      const email = await getEmail();
      if(email){
        handleAddHistory(email);
      }
    }
    item.deepLinkFn();
  };

  //get Status
  const isGuest = async (): Promise<boolean> => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      return value != "User"
    } catch (e) {
      throw new Error("Error getting status: " + e.message);
    }
  };

  // getEmail
  const getEmail = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Email");
      if (value) {
        return value;
      }
    } catch (e) {
      // error reading value
    }
  };

  //function to store the deepLink when pressed
  const handleAddHistory = async (email: string) => {
    //console.log("email: ", email);
    //console.log("appName: ", appName);
    //console.log("duration: ", durationText);
    //console.log("fare: ", fareText);

    console.log("trying to add records into the database");
    // perform login action here using email and password
    // mongodb api here
    try {
      const response = await fetch(
        "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/insertOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Request-Headers": "*",
            "api-key":
              "gzmrGJqDsVF9pOB6XO7nDxasKLWgOh4pOZe7LlIdQ4SXaeI1UMxJN8CSDHxJTgVM",
          },

          body: JSON.stringify({
            dataSource: "seventh",
            database: "Account",
            collection: "deepLinkHistory",
            document: {
              email: email,
              nameOfApp: item.serviceType,
              url: item.iconURL,
              duration: durationText,
              fare: fareText,
            },
          }),
        }
      );
      const data = await response.json();

      console.log("added successfully");
    } catch (err) {
      console.log("error adding record: ", err);
    }
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
