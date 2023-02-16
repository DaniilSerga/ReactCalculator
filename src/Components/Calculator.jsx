import React, { useState } from "react";
import Output from "./MyOutput";
import Table from "./UI/table/MyTable";
import CalculationsHistoryList from "./CalculationHistoryList";

const Calculator = () => {
    const [value, setValue] = useState('');
    const [history, setHistory] = useState([]);

    const appendSymbol = (newSymbol) => {
        if (isNaN(newSymbol) && isNaN(value[value.length - 1])) {
            let newVal = value.substring(0, value.length - 1) + newSymbol;

            setValue(newVal.toString());

            return;
        }

        setValue([...value, newSymbol].join(''));
    }

    const clearOutput = () => {
        setValue('');
    }

    const calculateResult = () => {
        if (value.indexOf(['-', '+', '/', '*']) !== -1) {
            return;
        }

        if (isNaN(value[value.length - 1])) {
            console.log(value[value.length - 1]);
            return;
        }

        const result = eval(value).toString()

        setHistory([...history, { value: `${value}=${result}`}]) 
        setValue(result);
    }

    const resetHistory = () => setHistory([]);

    return (
        <div>
            <Output value={value}/>
            <Table appendSymbol={appendSymbol} clearOutput={clearOutput} calculateResult={calculateResult}/>
            <div>
                {history.length === 0 ? 
                    <h1>История рассчётов пока пуста!</h1> :
                    <CalculationsHistoryList calculations={history} resetHistory={resetHistory}/>
                }
            </div>
        </div>
    );
}

export default Calculator;