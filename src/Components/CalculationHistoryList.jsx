import React from "react";
import CalculationHistory from "./CalculationHistory";
import ResetHistoryButton from "./ResetHistoryButton";

const CalculationHistoryList = ({calculations, resetHistory}) => {
    return (
        <ul>
            <h1>История рассчётов</h1>
            {calculations.map((calculation) => 
                <li> <CalculationHistory calculation={calculation} key={calculation.id}/> </li>
            )}
            <ResetHistoryButton resetHistory={resetHistory}/>
        </ul>
    );
}

export default CalculationHistoryList;