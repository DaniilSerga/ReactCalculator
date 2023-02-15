import React from "react";

const MyOutput = ({value}) => {
    return(
        <div>
            <h1 style={{textAlign:'center', border: '1px solid black'}}>
                { value.length > 0 ? value : '0' }
            </h1>
        </div>
    );
}

export default MyOutput;