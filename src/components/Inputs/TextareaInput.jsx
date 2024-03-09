import React from "react";

function TextareaInput(props){
    return(
        <div className="form-floating">
                <textarea className="form-control" name={props.name} placeholder={props.placeholder}></textarea>
                <label htmlFor="floatingPassword">{props.label}</label>
            </div>
    );
}

export default TextareaInput;