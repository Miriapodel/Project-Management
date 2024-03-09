import React from "react";
import TextInput from "../Inputs/TextInput";

// props: titlu, descriere, onChange

const Project = React.forwardRef(function Project(props, ref){

    console.log(props.toLoad);

    return(
        <div className="container">

            <section className="projectTop" >

                <h1>{props.toLoad.titlu}</h1>

                <span onClick={() => props.onDelete(props.index)}>Delete</span>

            </section>
            
            <div className="multiline">{props.toLoad.descriere}</div>
            <hr />

            <h3>Tasks</h3>

            <section className="addTaskForm">

                <TextInput label="Task" placeholder="Add Task" name="taskName" ref={ref} />
                <span>Add Task</span>

            </section>

            {/* <section className="showTasks">



            </section> */}

        </div>
    );
});

export default Project;