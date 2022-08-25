/* eslint-disable */
import React, { useState } from "react";
import Login from "../authentication/Login/Login";

const index = () => {

  const [isLogin, setIsLogin] = useState(true);
  // const [isVerifiedOTP, setisVerifiedOTP] = useState(false);
  // const [isLoginByEmail, setIsLoginByEmail] = useState(false)
  // const [isRegisterByEmail, setIsRegisterByEmail] = useState(false);
  // const [isCreatePassword, setisCreatePassword] = useState(false);
  // const [isPhoneNumber, setisPhoneNumber] = useState(false);
  // const [isBitMore, setisBitMore] = useState(false);

  return (
    <section className="account-section login">
      <Login />
    </section>
  );
}

export default index;