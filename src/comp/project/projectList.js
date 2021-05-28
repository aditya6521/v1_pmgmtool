import React from "react";
import ProjectSumm from "./projectSumm";

const ProjectList=()=>{
    return(
        <div className="project-list section">
            <ProjectSumm/>
            <ProjectSumm/>
            <ProjectSumm/>
            <ProjectSumm/>
        </div>
    )
}

export default ProjectList;