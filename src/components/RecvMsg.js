import React from "react";
import "../styles/recmsg.css";

export const RecvMsg = ({ message, time }) => {
	return (
		<div className="revcont">
			<div className="recmessagecont">
				<span>{message}</span>
				<span className="msgtime">{time}</span>
			</div>
		</div>
	);
};
