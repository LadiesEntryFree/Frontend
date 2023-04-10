import React, { useContext, useState } from "react";
import LoginInput from "../components/UI/LoginInput/LoginInput";
import LoginButton from "../components/UI/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import '../styles/Login.css';
import { Context } from "../index";

function Login() {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const {store, setStore} = useContext(Context)

  return (
    <div class='login-form'>
      <LoginInput type='text' placeholder='Nickname' value={nickname} onChange={e => setNickname(e.target.value)}/>
      <LoginInput type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      <LoginButton onClick={() => store.login(nickname, password)}>Sign in</LoginButton>
      <Link to='/registration'>Create an account?</Link>
    </div>
  );
}

export default Login;