import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import ProjectList from "../project/projectList";
//import Notifications from "./notification"; firebase issues 



class Dashboard extends Component {
    render(){
       // console.log(this.props);
       const {projects, auth}=this.props;
       if(!auth.uid) return <Redirect to="/signin"/>
        return(
            <div className="dashboard container">
                <div className="row">
                <div className="ttest">
                        Dashboard
                    </div>
                    <div className="s12 m8">
                        <ProjectList projects={projects}/>  
                    </div>
                
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    //console.log(state);
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}

 export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"projects", orderBy: ["createdAt","desc"]}
    ])
 )(Dashboard);