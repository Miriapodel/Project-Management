import React from "react";
import AddButton from "../Buttons/AddButton";
import Title from "../Title";
import SidebarProjectTitle from "./SidebarProjectTitle";


function Sidebar(props){

    function createElementToShow(element, index){

        return(
            <SidebarProjectTitle key={index} titlu={element.titlu} index={index} loadProject={props.loadProject}/>
        );
    }

    return(
        <div className="sidebar">
            <Title name="YOUR PROJECTS" color="white"/>
            <AddButton name="Adauga proiect" onClick={props.onAddButtonClicked}/>

            {props.elementsToShow.map((element, index) => createElementToShow(element, index))}
            
        </div>
    );
}

export default Sidebar;