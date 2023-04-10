import React from 'react';
import classes from './LoginButton.module.css';
import Icon from "react-icons-kit";
import {login as loginIcon} from 'react-icons-kit/iconic/login';

const LoginButton = (props) => {
    return (
        <button className={classes.loginBtn}>
            {props.children} 
            <div className={classes.loginIcon}>
                <Icon icon={loginIcon}/>
            </div>
        </button>
    );
};

export default LoginButton;