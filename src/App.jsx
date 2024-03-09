import React from "react";
import Sidebar from "./components/Sidebar";
import CenteredMessage from "./components/CenteredMessage";
import AddProject from "./components/AddProject";
import projects from "./projects.js";

function App() {

  const [mainContentMargin, setMainContentMargin] = React.useState(0); // state pentru a seta dinamic marginea pentru main-content
  const [projectsExist, setProjectsExist] = React.useState(false); // state pentru a vedea daca exista un proiect sa nu 
  const [addProject, setAddProject] = React.useState(true); // state pentru a vedea daca la momentul curent suntem in starea in care
                                                            // adaugam un proiect nou sau nu
  const [formData, setFormData] = React.useState({titlu:"", descriere:""});  // state pentru a contrla formularul de input proiect 

  React.useEffect( () => {
      setMainContentMargin(document.getElementsByClassName("sidebar")[0].offsetWidth);  // se apeleaza dupa fiecare re-render ca sa se 
                                                                                        // seteze marginea corecta pentru main-content
  });


  function handleFormDataChange(event){
      setFormData(
          { ...formData, [event.target.name] : event.target.value}
      )
  }

  function handleCancelAddProjectForm(){
      setFormData(
        {
          titlu: "",
          descriere: ""
        }
      );

      setAddProject(false);
  }


  function handleSubmitAddProjectForm(){
      projects.push(formData);

      setFormData(
        {
          titlu : "",
          descriere : ""
        }
      );

      setAddProject(false);

      if(!projectsExist)
        setProjectsExist(true);

      console.log(projects);
  }
  
  return (
    <>
      <Sidebar />

      <div id="main-content" style={{marginLeft : mainContentMargin}} className={ (projectsExist || addProject)? "" : "show-centered"} >
      
        { (!projectsExist && !addProject ) && <CenteredMessage message="Nu a fost adaugat niciun proiect" />} 

        {addProject && <AddProject onChange={handleFormDataChange} value={formData} onCancel={handleCancelAddProjectForm} onSubmit={handleSubmitAddProjectForm} />}

      </div>

    </>
  );
}

export default App;
