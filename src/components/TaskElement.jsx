import React from "react";
import JustTextButton from "./Buttons/JustTextButton";

function TaskElement(props){
    return(
        <div className="task-view my-2" >

        <p className="task-element" >{props.message}</p>
        <JustTextButton indexForDelete={props.indexForDelete} indexForProject={props.indexForProject} handleClick={props.handleDeleteTask} text="Delete"/>

        </div>
    );
}

export default TaskElement;