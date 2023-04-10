import React, { useState } from 'react';
import classes from './UserInfo.module.css';
import Icon from "react-icons-kit";
import {pencil} from 'react-icons-kit/icomoon/pencil'

const UserInfo = (props) => {
    const [disable, setDisable] = useState(true)

    return (
        <div className={classes.userInfo}>
            <input {...props} disabled={disable}/>
            <span onClick={() => setDisable(!disable)}><Icon icon={pencil}/></span>
        </div>
    );
};

export default UserInfo;