import React from "react";

function Modal(props){
    return(
        <div class="modal-dialog modal-dialog-centered">

        {props.message}
        
        </div>
    );
}

export default Modal;