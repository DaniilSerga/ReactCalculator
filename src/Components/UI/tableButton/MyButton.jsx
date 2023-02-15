import React from "react";
import classes from './MyButton.module.css';

const MyButton = ({value, ...props}) => {
    return (
        <button className={classes.btn} value={value} onClick={() => props.appendSymbol(value)}>
            {value}
        </button>
    )
}

export default MyButton;