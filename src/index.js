import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chats } from "./pages/Chats";
import { Register } from "./pages/Register";
import { Header } from "./components/Header";
import { ChatHeader } from "./components/ChatHeader";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Login />
			</>
		)
	},
	{
		path: "/register",
		element: (
			<>
				<Header />
				<Register />
			</>
		)
	},
	{
		path: "/chats/:uid",
		element: (
			<>
				<ChatHeader></ChatHeader>
				<Chats />
			</>
		)
	}
]);

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
