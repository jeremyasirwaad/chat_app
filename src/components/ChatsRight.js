import React, { useState } from "react";
import chat_img from "../pages/chat_img.svg";
import { set, push, ref } from "firebase/database";
import { AiOutlineSend } from "react-icons/ai";
import { db } from "../config/firebase_config";
import { Messges } from "./Messges";

export const ChatsRight = ({ userdata, chatparticipentid, id }) => {
	const [msg, setmsg] = useState("");
	var today = new Date();

	const sendmsg = () => {
		if (msg == "") {
			return;
		}
		push(ref(db, "users/" + id + "/chats/" + chatparticipentid), {
			message: msg,
			time:
				today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
			sent: 0
		});
		push(ref(db, "users/" + chatparticipentid + "/chats/" + id + "/"), {
			message: msg,
			time:
				today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
			sent: 1
		});
		setmsg("");
	};

	return (
		<div className="chatsrightside">
			<div className="chatbar"></div>
			<div className="messages">
				{chatparticipentid == "" ? (
					<div className="nomsg">
						<img src={chat_img} alt="" />
						<span>Jothi's Real Time Chat-App</span>
					</div>
				) : (
					<Messges id={id} participentid={chatparticipentid} />
				)}
			</div>
			<div className="chatinput">
				<input
					type="text"
					placeholder="type"
					value={msg}
					onChange={(e) => setmsg(e.target.value)}
				/>
				<AiOutlineSend
					size={20}
					onClick={() => {
						sendmsg();
					}}
				/>
			</div>
		</div>
	);
};
