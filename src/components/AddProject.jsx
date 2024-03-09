import React from "react";
import TextInput from "./Inputs/TextInput";
import TextareaInput from "./Inputs/TextareaInput";
import BasicButton from "./Buttons/BasicButton";

function AddProject(){
    return(
        <div className="form">
            <h1>Adauga un proiect nou</h1>    

            <TextInput name="titlu" placeholder="Titlu" label="Titlu"/>
            <TextareaInput name="descriere" placeholder="Descriere" label="Descriere" />
            
            <BasicButton type="success" message="Submit" />
            <BasicButton type="danger" message="Cancel" />
        </div>
    );
}

export default AddProject;