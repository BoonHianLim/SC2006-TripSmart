import * as React from "react";
import {
  StyleSheet,
  View,
  Animated,
  Text,
  Pressable,
  Alert,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import TextInputUser from "../components/TextInputUser";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily } from "../GlobalStyles";
import { Button } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";

const Register1 = () => {
  const navigation = useNavigation();
  const [checked, onChecked] = React.useState(false);
  const [email, onChangeText] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const verifyIfCheckboxChecked = () => {
    if (checked) {
      checkExistingDatabase();
    } else {
      Alert.alert("Please agree to the terms and conditions");
    }
  };

  //Functions for handling email
  const handleEmailChange = (text: React.SetStateAction<string>) => {
    console.log("email: ", text);
    onChangeText(text);
  };

  //Functions for handling password
  const handlePasswordChange = (text: React.SetStateAction<string>) => {
    console.log("password: ", text);
    setPassword(text);
  };

  //Functions for handling password2
  const handlePassword2Change = (text: React.SetStateAction<string>) => {
    console.log("password2: ", text);
    setPassword2(text);
  };

  const checkExistingDatabase = async () => {
    console.log("seeking records");
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
        if (password != password2) {
          Alert.alert("Error", "Passwords do not match", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          handleSignup();
        }
      } else {
        //alert user that email or password is already in database
        console.log("plan b");
        Alert.alert("Error", "You have already registered with us before", [
          {
            text: "Log me in",
            onPress: () => navigation.navigate("Login"),
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      }
    } catch (err) {
      console.log("error signing in: ", err);
    }
  };

  const handleSignup = async () => {
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
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    } catch (err) {
      console.log("error signing in: ", err);
    }
  };

  return (
    <ScrollView
      style={{
        flexGrow: 1,
      }}
    >
      <ImageBackground
        source={require("../assets/LoginRegisterImage/registerBackground.png")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            margin: responsiveScreenFontSize(3),
            marginTop: responsiveScreenHeight(15),
          }}
        >
          <View
            style={{
              marginBottom: responsiveScreenHeight(10),
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(6.5),
              }}
            >
              Create Your Account
            </Text>
          </View>

          <TextInputUser
            headerText="Email"
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />

          <TextInputUser
            headerText="Password"
            iconLabel="lock"
            placeholder="Password"
            value={password}
            isPassword={true}
            onChangeText={handlePasswordChange}
          />

          <TextInputUser
            headerText="Re-type Password"
            iconLabel="lock"
            isPassword={true}
            placeholder="Password2"
            value={password2}
            onChangeText={handlePassword2Change}
          />

          <View
            style={{
              marginBottom: responsiveScreenHeight(4),
            }}
          >
            <BouncyCheckbox
              onPress={() => onChecked(!checked)}
              textComponent={
                <Text
                  style={{
                    marginLeft: responsiveScreenFontSize(1),
                    fontFamily: FontFamily.montserratMedium,
                  }}
                >
                  I accept the Terms and the Privacy Policy
                </Text>
              }
              size={23}
              innerIconStyle={{
                borderRadius: 3,
              }}
              iconStyle={{
                borderRadius: 3,
              }}
            />
          </View>

          <View>
            <Button
              title="Sign Up"
              loading={false}
              loadingProps={{
                size: "small",
                color: "white",
              }}
              buttonStyle={{
                backgroundColor: Color.goldenrod_300,
                width: "100%",
                borderRadius: 5,
                padding: "3%",
              }}
              titleStyle={{
                fontFamily: FontFamily.montserratBold,
                fontSize: responsiveScreenFontSize(2.5),
                color: "black",
              }}
              containerStyle={{
                marginBottom: "10%",
              }}
              onPress={verifyIfCheckboxChecked}
            />
          </View>

          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: FontFamily.montserratMedium,
                fontSize: responsiveScreenFontSize(2),
              }}
            >
              Or continue with
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <AntDesign
                name="google"
                size={responsiveScreenHeight(6)}
                style={{
                  margin: responsiveScreenHeight(3),
                }}
              />
              <AntDesign
                name="facebook-square"
                size={responsiveScreenHeight(6)}
                style={{
                  margin: responsiveScreenHeight(3),
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: FontFamily.montserratMedium,
                  fontSize: responsiveScreenFontSize(1.5),
                }}
              >
                Already have an account?{" "}
              </Text>
              <Pressable>
                <Text
                  style={{
                    fontFamily: FontFamily.montserratMedium,
                    fontSize: responsiveScreenFontSize(1.5),
                  }}
                >
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
  },
});

export default Register1;
