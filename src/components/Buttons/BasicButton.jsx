import React from "react";

function BasicButton(props){
    return(
        <button className={`btn btn-${props.type} my-2 mx-1`}>{props.message}</button>
    );
}

export default BasicButton