import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const [messagees, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(auth);
    console.log(message);
    if (!message) return;

    await addDoc(messagesRef, {
      text: message,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room: room,
    });
    setMessage("");
  };

  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );

    onSnapshot(queryMessage, (snapshot) => {
      console.log(snapshot);

      let comingMessages = [];

      snapshot.forEach((doc) => {
        comingMessages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(comingMessages);
    });
  }, []);

  return (
    <div className="chat">
      <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <a href="/">Farkli Oda</a>
      </header>
      <div className="messages">
        {messagees.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <div key={messagees.id} className="user-message">
                <span className="text">{message.text}</span>
              </div>
            ) : (
              <div key={messagees.id} className="message">
                <span className="user">{message.user}</span>
                <span>{message.text}</span>
              </div>
            )}
          </>
        ))}
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={message}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="mesajinizi giriniz"
        />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Chat;
