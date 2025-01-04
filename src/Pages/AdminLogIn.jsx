import React from "react";
import "../components/LogIn.css";
import {useState} from "react";
import "../shoppingCart"
// import GROCIFY from '../assets/GROCIFY.png';
import {useNavigate} from "react-router-dom";


function AdminLogInContainer() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = {userName, password};
        // console.log(data);
        try {
            const response = await fetch("https://localhost:8901/admin/login", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(data),
                credentials: "include"
            })
            const result = await response.json();
            if (result.ok) {
                sessionStorage.setItem("auth", result.isAuthenticated);
                sessionStorage.setItem("username", result.userName);
                navigate("/admin/panel");
            } else {
                window.alert(result.message);
            }
        } catch (e) {
            console.log("Error reaching the server", e);
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to Admin Dashboard
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="string"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 input-border sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 input-border sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="Log-in-btn flex w-full justify-center px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>

    )
}


export default AdminLogInContainer;