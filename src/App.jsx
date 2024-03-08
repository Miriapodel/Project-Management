import React from "react";
import Sidebar from "./components/Sidebar";
import CenteredMessage from "./components/CenteredMessage";
import AddProject from "./components/AddProject";

function App() {

  const [mainContentMargin, setMainContentMargin] = React.useState(0); // state pentru a seta dinamic marginea pentru main-content
  const [projectsExist, setProjectsExist] = React.useState(false); // state pentru a vedea daca exista un proiect sa nu 

  React.useEffect( () => {
      setMainContentMargin(document.getElementsByClassName("sidebar")[0].offsetWidth);  // se apeleaza dupa fiecare re-render ca sa se 
                                                                                        // seteze marginea corecta pentru main-content
  });

  const [addProject, setAddProject] = React.useState(true); // state pentru a vedea daca la momentul curent suntem in starea in care
                                                            // adaugam un proiect nou sau nu

  return (
    <>
      <Sidebar />

      <div id="main-content" style={{marginLeft : mainContentMargin}} className={ (projectsExist || addProject)? "" : "show-centered"} >
      
        { (!projectsExist && !addProject ) && <CenteredMessage message="Nu a fost adaugat niciun proiect" />}

        {addProject && <AddProject />}

      </div>

    </>
  );
}

export default App;
