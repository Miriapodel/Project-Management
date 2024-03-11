import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CenteredMessage from "./components/CenteredMessage";
import AddProject from "./components/Projects Related/AddProject";
import Project from "./components/Projects Related/Project";
import Modal from "./components/Modal";

function App() {

  const taskNameInputRef = React.useRef(); // referinta catre input-ul care seteaza numele proiectului
  const dialogRef = React.useRef(); // referinta catre modal care apare atunci cand nu se introduce titlul unui proiect/task
  const [mainContentMargin, setMainContentMargin] = React.useState(0); // state pentru a seta dinamic marginea pentru main-content
  const [projects, setProjects] = React.useState([]); // state pentru proiecte
  const [formData, setFormData] = React.useState({titlu:"", descriere:""});  // state pentru a contrla formularul de input proiect 
  const [projectToLoadIndex, setProjectToLoadIndex] = React.useState(null);
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

      if(formData.titlu === "")
        dialogRef.current.open("Trebuie ca proiectul sa aiba un titlu");
      else
      {
      setProjects(prevProjects => [...prevProjects, {...formData, tasks:[]}]);

      setAddProject(false);
      }

      setFormData(
        {
          titlu : "",
          descriere : ""
        }
      );

      
  }

 
  // functie care se apeleaza atunci cand se apasa pe butonul de add project din sidebar
  // declara intentia de a adauga un nou proiect

  function handleAddButtonClick(){
    setAddProject(true)
    setProjectToLoadIndex(null);
  }


  //functie care sterge un proiect

  function handleDeleteProject(index){
    setProjects((prevProjects) => {
      prevProjects.splice(index, 1)
      return prevProjects});

    setProjectToLoadIndex(null);
  }
  

  function handleProjectToLoadChange(index){
    setProjectToLoadIndex(index);
  }


  // functie care se apeleaza atunci cand adaugam un task

  function addTaskToProject(index){

    const taskMessage = taskNameInputRef.current.value;

    if(taskMessage === ""){
      dialogRef.current.open("Trebuie ca task-ul sa aiba un titlu");
    }
    else{
      taskNameInputRef.current.value = "";

    setProjects( prevProjects =>{
      const projectsToUpdate = [...prevProjects]; // daca nu facem o copie, react nu va re-randa -> vede ca sunt aceleasi ref

      projectsToUpdate[index].tasks.push(taskMessage);

      return projectsToUpdate;
    });
    }

    
  }


  function deleteTaskFromProject(indexForProject, indexForDelete){
    setProjects( prevProjects => {

      const projectsToUpdate = [...prevProjects];
      projectsToUpdate[indexForProject].tasks.splice(indexForDelete, 1);

      return projectsToUpdate;
});
}

  return (
    <>
      <Sidebar elementsToShow={projects} onAddButtonClicked={handleAddButtonClick} loadProject={handleProjectToLoadChange}/>

      <div id="main-content" style={{marginLeft : mainContentMargin}} className={ (projects.length > 0 || addProject)? "" : "show-centered"} >
      
        { (!projects.length && !addProject ) && <CenteredMessage message="Nu a fost adaugat niciun proiect" />} 

        {addProject && <AddProject onChange={handleFormDataChange} value={formData} onCancel={handleCancelAddProjectForm} onSubmit={handleSubmitAddProjectForm} />}

        { projectToLoadIndex != null &&  <Project index={projectToLoadIndex}  toLoad={projects} onDelete={handleDeleteProject} handleAddTask={addTaskToProject} ref={taskNameInputRef} handleDeleteTask={deleteTaskFromProject} />}

        { (projects.length > 0 && !addProject && projectToLoadIndex == null) && <CenteredMessage message="Alege un proiect pe care sa il vezi"/>}

        <Modal ref={dialogRef}/>

      </div>

    </>
  );
}

export default App;



// TODO: SA ADAUG UN MODULE ATUNCI CAND TITLUL UNUI TASK NU E INTRODUS
// PORTAL PENTRU MODULE