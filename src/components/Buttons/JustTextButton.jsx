import React from "react";

// props: index, text, handleClick

function JustTextButton(props){
    return(
        <span className="just-text-button" onClick={() => { if(props.indexForProject && props.indexForDelete) props.handleClick(props.indexForProject); else props.handleClick(props.indexForProject, props.indexForDelete)}} >{props.text}</span>
    );
}

export default JustTextButton;