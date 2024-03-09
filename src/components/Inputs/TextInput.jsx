import React from "react";

function TextInput(props){
    return(
        <div className="form-floating mb-3">
                <input type="text" className="form-control" name={props.name} placeholder={props.placeholder} onChange={(event) => props.onChange(event)} value={props.value[props.name]} />
                <label htmlFor="floatingInput">{props.label}</label>
        </div>
    );
}

export default TextInput;