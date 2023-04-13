import AsyncStorage from "@react-native-async-storage/async-storage";

export default class DeepLinkController {
    constructor() {

    }

    isGuest = async (): Promise<boolean> => {
        try {
            const value = await AsyncStorage.getItem("@storage_Key");
            return value != "User"
        } catch (e) {
            throw new Error("Error getting status: " + e.message);
        }
    };

    getEmail = async () => {
        try {
            const value = await AsyncStorage.getItem("@storage_Email");
            if (value) {
                return value;
            }
        } catch (e) {
            // error reading value
        }
    };

    handleAddHistory = async (email:any,item: any) => {

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
                            duration: item.duration + " min",
                            fare: "$" + item.fare ,
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
}

export const deepLinkController = new DeepLinkController();