import React from "react";
import { GoogleLogin } from '@react-oauth/google';


export const LoginButton = () => {
	return (
		<>
			<div className="google-login-btn">
				<GoogleLogin
					width="280"
					onSuccess={credentialResponse => {
						console.log('Succesfully Logged In');
						console.log(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
		</>
	)
}

export default LoginButton