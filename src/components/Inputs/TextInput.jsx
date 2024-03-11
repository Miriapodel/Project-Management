import React from "react";

// props : name, placeholder, onChange(functie), value, label

const TextInput = React.forwardRef(function TextInput(props, ref){
    return(
        <div className="form-floating mb-3">
                <input type="text" className="form-control" ref={ref || null} name={props.name} placeholder={props.placeholder} onChange={(event) => { if (props.onChange) props.onChange(event); else null; }} value={props.value} />
                <label htmlFor="floatingInput">{props.label}</label>
        </div>
    );
});

export default TextInput;