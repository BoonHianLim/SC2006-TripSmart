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




}
export const settingsController = new SettingsController();