import React from "react";
import ProjectSumm from "./projectSumm";

const ProjectList=({projects})=>{
    return(
        <div className="project-list section">
            {
                projects && projects.map(project=>{
                    return(
                       <ProjectSumm project={project} key={project.id}/>
                    )
                })
            }
        </div>
    )
}

 
export default ProjectList;