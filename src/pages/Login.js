import React, { useState } from "react";
import "../styles/Login.css";
import { toast, Toaster } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase_config";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();

	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const login_func = () => {
		if (email == "" || password == "") {
			toast.error("Email or Password is empty");
			return;
		}

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user.uid);
				toast.success("Login Sucess");
				navigate("/chats/" + user.uid);

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toast.error(errorMessage);
			});
	};

	return (
		<div className="loginpage">
			<div>
				<Toaster
					containerStyle={{
						position: "absolute",
						top: "90px"
					}}
				/>
			</div>
			<div className="logincontainer">
				<span className="login_header">Login</span>
				<input
					type="text"
					placeholder="Email"
					onChange={(e) => {
						setemail(e.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="Password"
					onChange={(e) => {
						setpassword(e.target.value);
					}}
				/>
				<button onClick={login_func}>Login</button>
			</div>
		</div>
	);
};
