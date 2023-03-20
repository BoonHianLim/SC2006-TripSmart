import env from "../env";
import { googlemap } from "./googlemap";

export default class Taxi{
    private TAXI_API_KEY: string;
    constructor() {
        if (!env.TAXI_API_KEY) {
            throw new Error("TAXI_API_KEY environment variable is not set")
        }
        this.TAXI_API_KEY = env.TAXI_API_KEY || "";
    }

    async getData(start:string, end:string): Promise<[number, number]>{
        // Please complete the code here
    }
}

export const taxi = new Taxi();
//<Text>{JSON.stringify(data)}</Text>