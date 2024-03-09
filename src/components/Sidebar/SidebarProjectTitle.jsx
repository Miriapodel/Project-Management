import React from "react";

function SidebarTitle(props){
    return(
        <span className="sidebarTitle" onClick={() => props.loadProject(props.index)}>{props.titlu}</span>
    );
}

export default SidebarTitle;