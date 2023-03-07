import React from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Auth = ({ setIsAuth }) => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        localStorage.setItem("token", res.user.refreshToken);
        setIsAuth(true);
      })
      .catch((error) => console.log());
  };

  return (
    <div className="auth">
      <h1>Chat Odasi</h1>
      <p>Devam etmek icin giris yap</p>
      <button onClick={signIn}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" />{" "}
        Google ile giris
      </button>
    </div>
  );
};

export default Auth;
