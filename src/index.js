import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./Pages/Homepage";
import LogInContainer from "./Pages/LogInPage";
import UserRegistrationForm from "./Pages/UserRegistration";

const router = createBrowserRouter([{
    path: "/",
    element: <Home />,
},{
    path: "/login",
    element: <LogInContainer/>
},{
    path: "User-Registration",
    element: <UserRegistrationForm/>
}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
