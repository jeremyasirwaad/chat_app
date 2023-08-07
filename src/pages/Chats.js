import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase_config";
import "../styles/Chats.css";
import { SentMsg } from "../components/SentMsg";
import { Usercard } from "../components/Usercard";
import { RecvMsg } from "../components/RecvMsg";
import { ChatsRight } from "../components/ChatsRight";

export const Chats = () => {
	const [userdata, setuserdata] = useState({});
	const { uid } = useParams();
	const [userslist, setuserslist] = useState([]);
	const [chatparticipentid, setchatparticipentid] = useState("");

	useEffect(() => {
		readdata();
		letlist();
	}, []);

	const readdata = () => {
		const userref = ref(db, "users/" + uid);
		onValue(userref, (snapshot) => {
			const data = snapshot.val();
			setuserdata(data);
			console.log(data);
		});
	};

	const letlist = () => {
		const listref = ref(db, "list/");
		onValue(listref, (snapshot) => {
			const data = snapshot.val();
			console.log(data);
			setuserslist(Object.values(data));
		});
	};

	return (
		<div className="chatspage">
			<div className="chatscontainer">
				<div className="chatsleftside">
					<div className="userdetails">
						{userdata.username && (
							<>
								<div className="usercircle">
									{userdata.username.slice(0, 2)}
								</div>
								<span>{userdata.username}</span>
							</>
						)}
					</div>
					<div className="chatlist">
						{userslist &&
							userslist
								.filter((data) => data.uid != uid)
								.map((data) => {
									return (
										<Usercard
											name={data.username}
											data={data}
											setchatparticipentid={setchatparticipentid}
										/>
									);
								})}
					</div>
				</div>
				<ChatsRight
					chatparticipentid={chatparticipentid}
					userdata={userdata}
					id={uid}
				></ChatsRight>
			</div>
		</div>
	);
};
