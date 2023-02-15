import React from "react";
import style from "./styles/ResultButton.module.css";

const ResultButton = ({value, ...props}) => {
    return (
        <button className={style.equalsBtn} onClick={() => props.calculateResult()}>
            {value}
        </button>
    );
}

export default ResultButton;