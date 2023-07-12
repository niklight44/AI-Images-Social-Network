import React from "react";

const LoginForm = () => {
    return (
        <>
            <form action="/login" method="POST" className="mx-auto mt-16 w-72">
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-left">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full rounded-md border border-gray-300 p-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="mb-2 block text-left">Password:</label>
                    <input type="password" id="password" name="password" required className="w-full rounded-md border border-gray-300 p-2" />
                </div>

                <input type="submit" value="Login" className="w-3/6 rounded-md bg-blue-500 px-4 py-2 font-bold text-white" />
            </form>
        </>
    );
};

export default LoginForm;

