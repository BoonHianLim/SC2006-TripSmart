import React, {useEffect, useState} from "react";
import { AuthenticationRegistration } from './AuthenticationRegistration';
import { authenticationRegistrationFactory } from './AuthenticationRegistrationFactory'
import {Alert} from 'react-native'

export default class AccountController implements AuthenticationRegistration{
    private authenticationRegistration: AuthenticationRegistration;

    constructor(authenticationMethod: string) {
        console.log("wassup im inside constructor")
        this.authenticationRegistration = authenticationRegistrationFactory.createAuthenticationRegistration(authenticationMethod)
    }

    handleLogin(email: string, password: string): Promise<boolean> {
        console.log("inside the handlelogin heree")
        return this.authenticationRegistration.handleLogin(email = email, password = password)
    }

    handleRegistration(email: string, password: string, retypePassword: string, isCheckboxChecked: boolean): Promise<object> {
        
        console.log("inside the handleRegistrationn!! ")
        if(this.verifyIfCheckboxChecked(isCheckboxChecked) && this.verifyPassword(password) &&
        this.verifyValidEmail(email) && this.verifyRetypePassword(password, retypePassword)
        && this.verifyIfFilled(email, password, retypePassword)  ){
            console.log("currently registering right now")
            return this.authenticationRegistration.handleRegistration(email = email, password = password, retypePassword = retypePassword, isCheckboxChecked = isCheckboxChecked)
        }

        const errorObject = { result: false, reason: "inputError" };

        return Promise.resolve(errorObject);

    }

    verifyIfFilled(email: string, password: string, retypePassword: string): boolean{
        if (
            password.length == 0 ||
            retypePassword.length == 0 ||
            email.length == 0
          ) {
            Alert.alert("Error", "Please fill in all the fields", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
            return false
        }else{
            return true
        }
    }

    verifyIfCheckboxChecked(isCheckboxChecked: boolean):boolean{
        if(isCheckboxChecked)
            return true
        else{
            Alert.alert("Please agree to the terms and conditions");
            return false
        }
    }

    verifyPassword(password: string):boolean{
        if (password.length < 12 || !/[a-zA-Z]/.test(password)) {
            Alert.alert(
              "Error",
              "Passwords must be at least 12 digits and contain alphabetical letter",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }])
            return false;
            }else{
            return true;
        }
    }

    verifyValidEmail(email: string):boolean{
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!reg.test(email)) {
            Alert.alert("Error", "Invalid email format", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
            return false
        }else{
            return true
        }
    }

    verifyRetypePassword(password: string, retypePassword:string):boolean{
        if (password != retypePassword) {
            Alert.alert("Error", "Passwords do not match", [
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
            return false
        }else{
            return true
        }
    }


    




}

export let accountController: AccountController;