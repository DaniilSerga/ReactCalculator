import React from "react";
import classes from './styles/ResetHistoryButton.module.css'

const ResetHistoryButton = ({resetHistory}) => {
    return (
        <button className={classes.reset_history} onClick={() => resetHistory()}>
            Очистить историю
        </button>
    );
}

export default ResetHistoryButton;