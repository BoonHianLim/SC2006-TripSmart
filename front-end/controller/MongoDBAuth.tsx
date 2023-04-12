import { AuthenticationRegistration } from './AuthenticationRegistration';
import {Alert} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default class MongoDBAuth implements AuthenticationRegistration {
    private navigation = useNavigation();

    async handleLogin(email: string, password: string):Promise<boolean>{
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
                    password: password,
                  },
                }),
              }
            );

            const data = await response.json();

            if (data.document != null) {
                return true
            } else {
              return false
            }

          } catch (err) {
            console.log("error signing in: ", err);
            return false
          }
    }

    async handleRegistration(email: string, password: string, retypePassword: string, isCheckboxChecked: boolean): Promise<boolean> {
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
          this.addUser(email, password);
          return true;
        }else{
                  Alert.alert("Error", "You have already registered with us before", [
          {
            text: "Log me in",
            onPress: () => this.navigation.navigate("Login"),
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
          return false
        }
        
      } catch (err) {
        console.log("error signing in: ", err);
        return false;
      }
    }

    async addUser(email: string, password: string): Promise<void>{
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
              collection: "People",
              document: {
                email: email,
                password: password,
              },
            }),
          }
        );
        const data = await response.json();
  
        //tell user of the successful registration
  
        Alert.alert("Success", "You have successfully registered with us", [
          {
            text: "Bring me to log in page",
            onPress: () => this.navigation.navigate("Login"),
          },
        ]);
      } catch (err) {
        console.log("error signing in: ", err);
      }
    };
    
}

export const mongoDBAuth = new MongoDBAuth();