import React, { useState } from "react";
import Output from "./MyOutput";
import Table from "./UI/table/MyTable";

const Calculator = () => {
    const [value, setValue] = useState('');

    const appendSymbol = (newSymbol) => {
        setValue([...value, newSymbol].join(''));
    }

    const clearOutput = () => {
        setValue('');
    }

    const calculateResult = () => {
        if (value.indexOf(['-', '+', '/', '*']) !== -1) {
            return;
        }

        setValue((eval(value).toString())); 
    }

    return (
        <div>
            <Output value={value}/>
            <Table appendSymbol={appendSymbol} clearOutput={clearOutput} calculateResult={calculateResult}/>
        </div>
    );
}

export default Calculator;