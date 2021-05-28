import React from 'react'

function projectDetails(props) {
    console.log(props);
    const id=props.match.params.id;
    console.log(id);
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title -{id}</span>
                    <p>Incididunt veniam adipisicing nostrud quis Lorem nulla sit excepteur pariatur.</p>
                </div>
                <div className="card-action gret lighten-4 grey text">
                    <div>
                        Posted by PrimeX
                    </div>
                    <div>
                        May 30th,2021
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default projectDetails;
