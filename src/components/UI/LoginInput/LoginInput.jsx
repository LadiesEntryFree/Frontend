import { useState } from 'react';

import React from 'react';
import classes from './LoginInput.module.css'
import Icon from "react-icons-kit";
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

const LoginInput = (props) => {
    const isPasswordInput = props.type === 'password'

    const [icon, setIcon] = useState(eyeOff)
    const [type, setType] = useState(props.type)

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye)
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div className={classes.loginInput}>
            <input {...props} type={type} />
            {isPasswordInput
                ? <span onClick={handleToggle} className={classes.passwordBtn}><Icon icon={icon}/></span>
                : <div></div>
            }
        </div>
    );
};

export default LoginInput;