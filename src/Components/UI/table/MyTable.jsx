import React from "react";
import ClearButton from "../../ClearButton";
import ResultButton from "../../ResultButton";
import Button from "../tableButton/MyButton";
import classes from './MyTable.module.css';

const MyTable = ({...props}) => {
    return(
        <div className={classes['calc-div']}>
            <table className={classes.myTable}>
                <tbody>
                    <tr>
                        <td> <Button appendSymbol={props.appendSymbol} value={7}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={8}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={9}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={'/'}/> </td>
                    </tr>
                    <tr>
                        <td> <Button appendSymbol={props.appendSymbol} value={4}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={5}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={6}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={'*'}/> </td>
                    </tr>
                    <tr>
                        <td> <Button appendSymbol={props.appendSymbol} value={1}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={2}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={3}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={'-'}/> </td>
                    </tr>
                    <tr>
                        <td> <ClearButton clearOutput={props.clearOutput}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={0}/> </td>
                        <td> <ResultButton calculateResult={props.calculateResult} appendSymbol={props.appendSymbol} value={'='}/> </td>
                        <td> <Button appendSymbol={props.appendSymbol} value={'+'}/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MyTable;