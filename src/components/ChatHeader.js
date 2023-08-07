import React from "react";
import "../styles/Header.css";

export const ChatHeader = () => {
	return (
		<div className="header">
			<div>
				<span className="title">Chat Application</span>
			</div>
			<div className="lnrcont">
				<span>Logout</span>
			</div>
		</div>
	);
};
