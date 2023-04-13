import { AuthenticationRegistration } from './AuthenticationRegistration';
import {Alert} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default class MongoDBAuth implements AuthenticationRegistration {
    // private navigation = useNavigation();

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

    async handleRegistration(email: string, password: string, retypePassword: string, isCheckboxChecked: boolean): Promise<object> {
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
          await this.addUser(email, password);
          const successObject = { result: true, reason: "emailRegistered" }
          return successObject;
        }else{

            const errorObject = { result: false, reason: "duplicateEmail" };
            return errorObject
        }
        
      } catch (err) {
        console.log("error signing in: ", err);
          const errorObject = { result: false, reason: "unknownReason" };
          return errorObject

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

      } catch (err) {
        console.log("error signing in: ", err);
      }
    };
    
}

export const mongoDBAuth = new MongoDBAuth();