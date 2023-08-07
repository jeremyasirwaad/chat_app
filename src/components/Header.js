import React from "react";
import "../styles/Header.css";

export const Header = () => {
	return (
		<div className="header">
			<div>
				<span className="title">Chat Application</span>
			</div>
			<div className="lnrcont">
				<span>Login</span>
				<span>Register</span>
			</div>
		</div>
	);
};
