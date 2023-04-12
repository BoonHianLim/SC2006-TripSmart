import React, {useEffect, useState} from "react";
import { AuthenticationRegistration } from './AuthenticationRegistration';
import { mongoDBAuth } from "./MongoDBAuth";


export default class AuthenticationRegistrationFactory{

    createAuthenticationRegistration(authenticationMethod: string):AuthenticationRegistration {
        if(authenticationMethod === "googleAuth"){
            
        }else if(authenticationMethod === "mongoDBAuth"){
            return mongoDBAuth;
        }

        throw new Error(`Unknown authentication method: ${authenticationMethod}`);
    }


}
export const authenticationRegistrationFactory = new AuthenticationRegistrationFactory();