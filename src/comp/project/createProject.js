import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../store/action/projectActions';




class CreateProject extends Component {
    state={
        title:"",
        content:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(this.state);
       this.props.createProject(this.state);
       document.forms["myform"].reset();
         }


    render() {
        const {auth}=this.props;
        if(!auth.uid) return <Redirect to="/signin" />
        return (
            <div className="container">
                <form id="myform" onSubmit={this.handleSubmit}  className="white">
                    <h5 className="gret-text text-darken-3"> Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div>
                        <button className="btn pink lighten-1 z-depth-0">
                           Create
                        </button>
                    </div>
                    

                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        createProject:(project)=> dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
