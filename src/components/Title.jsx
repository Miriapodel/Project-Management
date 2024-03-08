import React from "react";

function Title(props){
    return(
        <span className="title" style={{color:props.color}}>{props.name}</span>
    );
}

export default Title;