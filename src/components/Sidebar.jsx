import React from "react";
import AddButton from "./AddButton";
import Title from "./Title";

function Sidebar(){
    return(
        <div className="sidebar">
            <Title name="YOUR PROJECTS" color="white"/>
            <AddButton name="Adauga proiect"/>
        </div>
    );
}

export default Sidebar;