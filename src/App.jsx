import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CenteredMessage from "./components/CenteredMessage";
import AddProject from "./components/Projects Related/AddProject";
import Project from "./components/Projects Related/Project";

function App() {

  const taskNameInputRef = React.useRef(); // referinta catre input-ul care seteaza numele proiectului
  const [mainContentMargin, setMainContentMargin] = React.useState(0); // state pentru a seta dinamic marginea pentru main-content
  const [projects, setProjects] = React.useState([]); // state pentru proiecte
  const [formData, setFormData] = React.useState({titlu:"", descriere:""});  // state pentru a contrla formularul de input proiect 
  const [projectToLoad, setProjectToLoad] = React.useState(null);
  const [addProject, setAddProject] = React.useState(false); // state pentru a vedea daca la momentul curent suntem in starea in care
  // adaugam un proiect nou sau nu

  React.useEffect( () => {
      setMainContentMargin(document.getElementsByClassName("sidebar")[0].offsetWidth);  // se apeleaza dupa fiecare re-render ca sa se 
                                                                                        // seteze marginea corecta pentru main-content
  });


  // functie care se apeleaza de fiecare daca cand un input din formular se schimba
  // se asigura ca valorile din formData reflecta tot timpul valorile care sunt puse in formular

  function handleFormDataChange(event){
      setFormData(
          { ...formData, [event.target.name] : event.target.value} // se retine valoarea curenta a input-ului care este schimbat
      )
  }


  // functie care se apeleaza atunci cand utilizatorul da cancel adaugarii unui proiect
  // reseteaza campurile din formular si anunta prin setAddProject ca la momentul curent
  // nu se incearca sa se introduca data in formular

  function handleCancelAddProjectForm(){
      setFormData(
        {
          titlu: "",
          descriere: ""
        }
      );

      setAddProject(false);
  }


  // functie care se apeleaza atunci cand formularul este trimis
  // reseteaza datele din campuri si introduce datele date de utilizator in projects
  // anunta daca nu a fost anuntat pana la acel moment ca exista cel putin un proiect

  function handleSubmitAddProjectForm(){

      setProjects(prevProjects => [...prevProjects, formData]);

      setFormData(
        {
          titlu : "",
          descriere : ""
        }
      );

      setAddProject(false);
  }

  // metoda care se apeleaza dupa ce utilizatorul a ales din sidebar o proiect pe care vrea sa il vada
  // se incarca datele despre proiect

  function loadProject(index){
    const currentProjectToLoad = projects[index];

    setProjectToLoad(currentProjectToLoad);
  }


  // functie care se apeleaza atunci cand se apasa pe butonul de add project din sidebar
  // declara intentia de a adauga un nou proiect

  function handleAddButtonClick(){
    setAddProject(true)
    setProjectToLoad(null);
  }
  
  return (
    <>
      <Sidebar elementsToShow={projects} onAddButtonClicked={handleAddButtonClick} loadProject={loadProject}/>

      <div id="main-content" style={{marginLeft : mainContentMargin}} className={ (projects.length > 0 || addProject)? "" : "show-centered"} >
      
        { (!projects.length && !addProject ) && <CenteredMessage message="Nu a fost adaugat niciun proiect" />} 

        {addProject && <AddProject onChange={handleFormDataChange} value={formData} onCancel={handleCancelAddProjectForm} onSubmit={handleSubmitAddProjectForm} />}

        { projectToLoad &&  <Project  toLoad={projectToLoad}/>}

        { (projects.length > 0 && !addProject && projectToLoad == null) && <CenteredMessage message="Alege un proiect pe care sa il vezi"/>}

      </div>

    </>
  );
}

export default App;
