import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, ListItem } from "@rneui/base";
import React, { useEffect } from "react";
import { Value } from "react-native-reanimated";

const ListItemScroll = ({ item, isCheap = true }: any) => {
  const [email, setEmail] = React.useState("");
  const [appName, setAppName] = React.useState("");

  //ensure that they r all updated before calling adding into database
  useEffect(() => {
    if (email && appName) {
      handleAddHistory();
    }
  }, [email, appName]);

  //call process
  const process = async () => {
    console.log("pressed");
    //check if they are user or guest
    const status = await getStatus();
    if (status == true) {
      //means that is a guest, dont store deep link history and just deepLink
      //deep link function here
      console.log("It is a guest, so do nothing");
    } else {
      await getEmail();
      setAppName(item.name);

      //deep link function here
    }
  };

  //get Status
  const getStatus = async (): Promise<boolean> => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value == "User") {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      // error reading value
      throw new Error("Error getting status: " + e.message);
    }
  };

  // getEmail
  const getEmail = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Email");
      if (value != null) {
        setEmail(value);
        console.log("valie: ", value);
        return value;
      } else {
        //
      }
    } catch (e) {
      // error reading value
    }
  };

  //function to store the deepLink when pressed
  const handleAddHistory = async () => {
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
              nameOfApp: appName,
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
    <ListItem onPress={() => process()} bottomDivider>
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
  );
};

export default ListItemScroll;
