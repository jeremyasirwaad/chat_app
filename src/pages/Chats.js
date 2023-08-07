import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase_config";

export const Chats = () => {
	const [userdata, setuserdata] = useState({});
	const { uid } = useParams();

	useEffect(() => {
		readdata();
	}, []);

	const readdata = () => {
		const userref = ref(db, "users/" + uid);
		onValue(userref, (snapshot) => {
			const data = snapshot.val();
			setuserdata(data);
			console.log(data);
		});
	};

	return <div>
		
	</div>;
};
