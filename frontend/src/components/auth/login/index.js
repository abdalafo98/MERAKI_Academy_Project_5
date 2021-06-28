import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../reducers/login";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Dispatch = useDispatch();
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        Dispatch(setToken(result.data.token));
        console.log(result.data.token);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Enter your email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter your Password"
      />
      <button onClick={signIn}>Sign-In</button>
    </>
  );
};

export default Login;
