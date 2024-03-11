import React from "react";
import TextInput from "../Inputs/TextInput";
import TaskElement from "../TaskElement";
import JustTextButton from "../Buttons/JustTextButton";

// props: titlu, descriere, onChange

const Project = React.forwardRef(function Project(props, ref){

    
    function createTaskELement(element, index){
        return (<TaskElement key={index} message={element} indexForDelete={index} indexForProject={props.index} handleDeleteTask={props.handleDeleteTask}/>)
    }


    return(
        <div className="container">

            <section className="projectTop" >

                <h1>{props.toLoad[props.index].titlu}</h1>

                <JustTextButton indexForProject={props.index} handleClick={props.onDelete} text="Delete"/>

            </section>
            
            <div className="multiline">{props.toLoad[props.index].descriere}</div>
            <hr />

            <h3>Tasks</h3>

            <section className="addTaskForm">

                <TextInput label="Task" placeholder="Add Task" name="taskName" ref={ref} />
                <JustTextButton indexForProject={props.index} handleClick={props.handleAddTask} text="Add Task"/>

            </section>

            <section className="show-tasks">

                {props.toLoad[props.index].tasks.map(createTaskELement)}

            </section>

        </div>
    );
});

export default Project;