import React, { useEffect, useState } from "react";
import { SentMsg } from "./SentMsg";
import { RecvMsg } from "./RecvMsg";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase_config";

export const Messges = ({ id, participentid }) => {
	const [listmessages, setlistmessages] = useState([]);

	useEffect(() => {
		readdata();
	}, [participentid]);

	const readdata = () => {
		console.log(participentid);
		const userref = ref(db, "users/" + id + "/chats/" + participentid);
		onValue(userref, (snapshot) => {
			const data = snapshot.val();
			if (data) {
				setlistmessages(Object.values(data));
			} else {
				setlistmessages(null);
			}
		});
	};

	return (
		<div>
			{listmessages
				? listmessages.map((msg) => {
						if (msg.sent == 0) {
							return <SentMsg message={msg.message} time={msg.time} />;
						} else {
							return <RecvMsg message={msg.message} time={msg.time}></RecvMsg>;
						}
				  })
				: "No Chats Available"}
		</div>
	);
};
