import React from "react";
import backgroundVideo from "../assets/share.mp4";

export const LoginBackground = () => {
    return (
        <video
            src={backgroundVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            id="vid"
            width="100%"
        />
    )
}

export default LoginBackground