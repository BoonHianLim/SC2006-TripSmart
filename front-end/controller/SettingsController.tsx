import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";



export default class SettingsController{
    constructor() {
    }

    getLanguage = async () => {
        const value = await AsyncStorage.getItem("language");
        if (value !== null) {
          return value;
        } else {
          return "English"; 
        }
   };
      
    setLanguage = async (langID: string) => {
        await AsyncStorage.setItem("language", langID);
    };

    logout = async () => {
        try {
          await AsyncStorage.setItem("@storage_Key", "Guest");
          await AsyncStorage.setItem("@storage_Email", "");
        } catch (e) {
          // saving error
        }
    };

    checkExistingDatabase = async (email: string, oldPassword: string, newPassword: string) => {
      console.log("seeking records");
      console.log("email", email);
      try {
        const response = await fetch(
          "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/findOne",
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
              collection: "People",
              filter: {
              email: email,
              },
            }),
          }
        );
        const data = await response.json();
        if (data.document == null) {
          //if data does not exist, inform that the email does not exist
          Alert.alert("Error", "Email does not exist", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          //do update password dunction
          //check newPassword and old password is not the same
          if (newPassword == oldPassword) {
            Alert.alert(
              "Error",
              "New password cannot be the same as old password",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          } else if (oldPassword != data.document.password) {
            //alert that your password is incorrect
            Alert.alert("Error", "Password is incorrect", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
          } else {
            this.handleUpdate(email, newPassword);
          }
        }
      } catch (err) {
        console.log("error: ", err);
      }
    };
    
    handleUpdate = async (email: string, newPassword: string) => {
        console.log("updating records");
        console.log("email", email);
        console.log("newPassword", newPassword);
    
        fetch(
          "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/updateOne",
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
              collection: "People",
              filter: {
                email: email,
              },
              update: {
                $set: {
                  password: newPassword,
                },
              },
            }),
          }
        )
        .then((response) => {
          if (response.ok) {
            console.log("Update successful");
          } else {
            console.log("Update failed");
          }
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    };


}
export const settingsController = new SettingsController();