

export default class HistoryController{
    constructor() {
    }

    retrieveHistory = async (email: string) => {
        console.log("retrieveHistory");
        //console.log("looking for records from database");
        // perform login action here using email and password
        // mongodb api here
        try {
          const response = await fetch(
            "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/find",
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
                filter: {
                  email: email,
                },
              }),
            }
          );
          const history = await response.json();
          console.log("data: ", history);
          if (history != null) {
            return history;
          } else {
            console.log("History might be empty");
            return [];
          }
        } catch (err) {
          console.log("error retrieving data: ", err);
          return [];
        }
      };


}
export const historyController = new HistoryController();