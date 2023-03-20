import env from "../env";
import { googlemap } from "./googlemap";

export default class Publictransport{
    private PUBLIC_TRANSPORT_API_KEY: string;
    constructor() {
        if (!env.PUBLIC_TRANSPORT_API_KEY) {
            throw new Error("TAXI_API_KEY environment variable is not set")
        }
        this.PUBLIC_TRANSPORT_API_KEY = env.PUBLIC_TRANSPORT_API_KEY || "";
    }

    async getData(start:string, end:string): Promise<[number, number]>{
        // Please complete the code here
    }
}

export const publictransport = new Publictransport();
//<Text>{JSON.stringify(data)}</Text>