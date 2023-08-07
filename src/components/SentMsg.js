import React from "react";
import "../styles/sentmsg.css";

export const SentMsg = ({ message, time }) => {
	return (
		<div className="sendcont">
			<div className="messagecont">
				<span>{message}</span>
				<span className="msgtime">{time}</span>
			</div>
		</div>
	);
};
