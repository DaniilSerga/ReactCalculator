import React from "react";
import classes from './styles/ClearButton.module.css';

const ClearButton = ({...props}) => {
    return(
        <button className={classes['clear-output']} onClick={() => props.clearOutput()}>
            C
        </button>
    );
}

export default ClearButton;