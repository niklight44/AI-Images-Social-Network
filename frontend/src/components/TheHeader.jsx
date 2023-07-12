import React from "react";
import {Link} from "react-router-dom";

export const TheHeader = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/">Pixel Dreamscape</Link>
                </div>
            </div>
        </>
    )
}
