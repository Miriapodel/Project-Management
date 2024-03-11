import React from "react";
import ReactDOM from "react-dom";

const Modal = React.forwardRef(function Modal(props, ref){

    const dialogRef = React.useRef();
    const messageRef = React.useRef();

    React.useImperativeHandle(ref, () =>{
        

        return(
            {
                open(currentMessage){
                    messageRef.current.textContent=currentMessage;
                    dialogRef.current.showModal();
                }
            }
        )
    });

   return(
    ReactDOM.createPortal(
        <dialog  ref={dialogRef} className="">

        <span ref={messageRef}></span>
        
        </dialog>,
        
        document.getElementById("modal-root")
    )
    );
});

export default Modal;