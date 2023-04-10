import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div>
            <div style={{fontWeight: 'bolder'}}>{props.name}</div>
            <input className={classes.input} {...props} type="text" />
        </div>
    );
};

export default Input;