import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../config/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { push, ref, set } from "firebase/database";

export const Register = () => {
	const navigate = useNavigate();
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	const signup_func = () => {
		if (email == "" || password == "" || name == "") {
			toast.error("Email, Password or name is empty");
			return;
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				set(ref(db, "users/" + user.uid), {
					username: name,
					email: email
				});
				push(ref(db, "list/"), {
					username: name,
					uid: user.uid
				});
				navigate("/chats/" + user.uid);
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
				<span className="login_header">Register</span>
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => {
						setname(e.target.value);
					}}
				/>
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
				<button onClick={signup_func}>Register</button>
			</div>
		</div>
	);
};
