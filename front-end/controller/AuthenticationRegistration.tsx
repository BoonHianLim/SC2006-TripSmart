import React, {useEffect, useState} from "react";

export interface AuthenticationRegistration{

    handleLogin(email: string, password: string): Promise<boolean>;
    handleRegistration(email: string, password: string, retypePassword: string, isCheckboxChecked: boolean): Promise<boolean>;

}
