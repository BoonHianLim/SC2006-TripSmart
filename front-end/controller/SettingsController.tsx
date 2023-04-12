import AsyncStorage from "@react-native-async-storage/async-storage";



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
}
export const settingsController = new SettingsController();