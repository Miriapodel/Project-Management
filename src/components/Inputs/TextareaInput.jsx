import React from "react";

function TextareaInput(props){
    return(
        <div className="form-floating">
                <textarea className="form-control" name={props.name} placeholder={props.placeholder} onChange={(event) => props.onChange(event)} value={props.value[props.name]} />
                <label htmlFor="floatingPassword">{props.label}</label>
            </div>
    );
}

export default TextareaInput;