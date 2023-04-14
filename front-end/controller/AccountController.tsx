import React, { useEffect, useState } from "react";
import { AuthenticationRegistration } from "./AuthenticationRegistration";
import { authenticationRegistrationFactory } from "./AuthenticationRegistrationFactory";
import { Alert } from "react-native";

export default class AccountController implements AuthenticationRegistration {
  private authenticationRegistration: AuthenticationRegistration;

  constructor(authenticationMethod: string) {
    console.log("wassup im inside constructor");
    this.authenticationRegistration =
      authenticationRegistrationFactory.createAuthenticationRegistration(
        authenticationMethod
      );
  }

  handleLogin(email: string, password: string): Promise<boolean> {
    console.log("inside the handlelogin heree");
    return this.authenticationRegistration.handleLogin(
      (email = email),
      (password = password)
    );
  }

  handleRegistration(
    email: string,
    password: string,
    retypePassword: string,
    isCheckboxChecked: boolean
  ): Promise<object> {
    console.log("inside the handleRegistrationn!! ");
    if (
      this.verifyIfCheckboxChecked(isCheckboxChecked) &&
      this.verifyIfFilled(email, password, retypePassword) &&
      this.verifyPassword(password) &&
      this.verifyValidEmail(email) &&
      this.verifyRetypePassword(password, retypePassword)
    ) {
      console.log("currently registering right now");
      return this.authenticationRegistration.handleRegistration(
        (email = email),
        (password = password),
        (retypePassword = retypePassword),
        (isCheckboxChecked = isCheckboxChecked)
      );
    }

    const errorObject = { result: false, reason: "inputError" };

    return Promise.resolve(errorObject);
  }

  verifyIfFilled(
    email: string,
    password: string,
    retypePassword: string
  ): boolean {
    if (
      password.length == 0 ||
      retypePassword.length == 0 ||
      email.length == 0
    ) {
      Alert.alert("Error", "Please fill in all the fields", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return false;
    } else {
      return true;
    }
  }

  verifyIfCheckboxChecked(isCheckboxChecked: boolean): boolean {
    if (isCheckboxChecked) return true;
    else {
      Alert.alert("Please agree to the terms and conditions");
      return false;
    }
  }

  verifyPassword(password: string): boolean {
    if (password.length < 12 || !/[a-zA-Z]/.test(password)) {
      Alert.alert(
        "Error",
        "Passwords must be at least 12 digits and contain alphabetical letter",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      );
      return false;
    } else {
      return true;
    }
  }

  verifyValidEmail(email: string): boolean {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!reg.test(email)) {
      Alert.alert("Error", "Invalid email format", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return false;
    } else {
      return true;
    }
  }

  verifyRetypePassword(password: string, retypePassword: string): boolean {
    if (password != retypePassword) {
      Alert.alert("Error", "Passwords do not match", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return false;
    } else {
      return true;
    }
  }

  changePassword = async (
    email: string,
    oldPassword: string,
    newPassword: string
  ) => {
    console.log("seeking records");
    console.log("email", email);
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
        //check if fields are empty
        if (email == "" || oldPassword == "" || newPassword == "") {
          Alert.alert("Error", "Please fill in all the fields", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          Alert.alert("Error", "Email does not exist", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      } else {
        //do update password dunction
        //check newPassword and old password is not the same
        if (newPassword == oldPassword) {
          Alert.alert(
            "Error",
            "New password cannot be the same as old password",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
          );
        } else if (oldPassword != data.document.password) {
          //alert that your password is incorrect
          Alert.alert("Error", "Password is incorrect", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          this.handlePasswordUpdate(email, newPassword);
          Alert.alert("", "Password Successfully Updated", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      }
    } catch (err) {
      console.log("error: ", err);
    }
  };

  handlePasswordUpdate = async (email: string, newPassword: string) => {
    console.log("updating records");
    console.log("email", email);
    console.log("newPassword", newPassword);

    fetch(
      "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-yvoco/endpoint/data/v1/action/updateOne",
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
          update: {
            $set: {
              password: newPassword,
            },
          },
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Update successful");
        } else {
          console.log("Update failed");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
}

export let accountController: AccountController;
