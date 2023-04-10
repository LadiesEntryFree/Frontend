import React from 'react';
import classes from './LogoutButton.module.css';
import Icon from "react-icons-kit";
import {logout as logoutIcon} from 'react-icons-kit/iconic/logout';
import $api from '../../../http';

const LogoutButton = (props) => {
    return (
        <button className={classes.logoutBtn}>
            {props.children} 
            <div className={classes.logoutIcon} onClick={$api}>
                <Icon icon={logoutIcon}/>
            </div>
        </button>
    );
};

export default LogoutButton;