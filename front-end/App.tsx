const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GreetingPage1 from "./screens/GreetingPage1";
import Settings from "./screens/Settings";
import History1 from "./screens/History1";

import ResultFilter from "./screens/ResultFilter";
import Login from "./screens/Login";
import ResultList from "./screens/ResultList";

import Register from "./screens/Register";
import LoginPage from "./screens/LoginPage";
import GreetingPage3 from "./screens/GreetingPage3";
import GreetingPage2 from "./screens/GreetingPage2";
import LoadingScreen from "./screens/LoadingScreen";
import changePassword from "./screens/changePassword";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold: require("./assets/fonts/Montserrat_bold.ttf"),
    Montserrat_extrabold: require("./assets/fonts/Montserrat_extrabold.ttf"),
    "Montserrat Alternates": require("./assets/fonts/Montserrat_Alternates.ttf"),
    "Montserrat Alternates_bold": require("./assets/fonts/Montserrat_Alternates_bold.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Urbanist: require("./assets/fonts/Urbanist.ttf"),
    Urbanist_medium: require("./assets/fonts/Urbanist_medium.ttf"),
    Urbanist_semibold: require("./assets/fonts/Urbanist_semibold.ttf"),
    Urbanist_bold: require("./assets/fonts/Urbanist_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="GreetingPage1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="GreetingPage1"
              component={GreetingPage1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History"
              component={History1}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="changePassword"
              component={changePassword}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ResultFilter"
              component={ResultFilter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResultList"
              component={ResultList}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GreetingPage3"
              component={GreetingPage3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GreetingPage2"
              component={GreetingPage2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
