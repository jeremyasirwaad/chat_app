import React from "react";
import "../styles/Usercard.css";

export const Usercard = ({ name, data, setchatparticipentid }) => {
	return (
		<div
			className="usercard"
			onClick={() => {
				setchatparticipentid(data.uid);
			}}
		>
			<div
				className="usercircle"
				style={{ backgroundColor: "rgb(208, 208, 208)" }}
			>
				{name.slice(0, 2)}
			</div>
			<span>{name}</span>
		</div>
	);
};
