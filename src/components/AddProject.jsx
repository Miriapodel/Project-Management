import React from "react";

function AddProject(){
    return(
        <div className="form">
            <h1>Adauga un proiect nou</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Titlu proiect</label>
            </div>
            <div className="form-floating">
                <textarea className="form-control" id="floatingDescription" placeholder="Descriere"></textarea>
                <label htmlFor="floatingPassword">Descriere</label>
            </div>
            <button type="submit" className="btn btn-success my-2 mx-1">Submit</button>
            <button type="submit" className="btn btn-danger my-2 mx-1">Cancel</button>
        </div>
    );
}

export default AddProject;