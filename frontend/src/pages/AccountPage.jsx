import React, {useState} from "react";

export const AccountPage = () => {
    const accountName = localStorage.getItem('user');
    return (
        <>
            <h1>Account Info</h1>
            <div className="subheader">Account Name</div>
            <h2>{accountName}</h2>
        </>
    )
}
