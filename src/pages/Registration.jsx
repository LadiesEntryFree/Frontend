import React, { useState } from "react";
import LoginInput from "../components/UI/LoginInput/LoginInput";
import LoginButton from "../components/UI/LoginButton/LoginButton";
import { Link } from "react-router-dom";
import '../styles/Login.css';

function Registration() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <div class='login-form'>
      <LoginInput type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
      <LoginInput type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      <LoginInput type='password' placeholder='Repeat password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
      <LoginButton>Sign up</LoginButton>
      <Link to='/login'>Already have an account?</Link>
    </div>
  );
}

export default Registration;