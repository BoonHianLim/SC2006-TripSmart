import * as Location from "expo-location";


export default class GPSController {
    constructor() {

    }

    async fetchLocation(){
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("not granted!")
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        return location
    }
}

export const gpsController = new GPSController();