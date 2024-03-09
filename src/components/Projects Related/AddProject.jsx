import React from "react";
import TextInput from "../Inputs/TextInput";
import TextareaInput from "../Inputs/TextareaInput";
import BasicButton from "../Buttons/BasicButton";

function AddProject(props){
    return(
        <div className="form">
            <h1>Adauga un proiect nou</h1>    

            <TextInput name="titlu" placeholder="Titlu" label="Titlu" onChange={props.onChange} value={props.value["titlu"]} />
            <TextareaInput name="descriere" placeholder="Descriere" label="Descriere" onChange={props.onChange} value={props.value["descriere"]} />

            <BasicButton type="success" message="Submit" onClick={props.onSubmit}/>
            <BasicButton type="danger" message="Cancel" onClick={props.onCancel} />
        </div>
    );
}

export default AddProject;