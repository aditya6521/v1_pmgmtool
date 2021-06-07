import React from "react";
import { Link } from "react-router-dom";
import ProjectSumm from "./projectSumm";

const ProjectList=({projects})=>{
    return(
        <div className="project-list section">
            {
                projects && projects.map(project=>{
                    return(
                       <Link to={"/project/"+ project.id} key={project.id}>
                       <ProjectSumm project={project}/>
                      </Link>
                    )
                })
            }
        </div>
    )
}

 
export default ProjectList;