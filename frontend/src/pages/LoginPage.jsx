import React from "react";
import LoginButton from "../components/LoginButton.jsx";
import LoginForm from "../components/LoginForm.jsx";
import LoginBackground from "../components/LoginBackground.jsx";


export const LoginPage = () => {
    return (
        <>
            <LoginBackground />

            <h1>Log Into Your Account</h1>
            <LoginForm />

            <LoginButton />
        </>
    )
}

export  default  LoginPage