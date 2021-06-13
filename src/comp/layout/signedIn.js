import React from "react";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";
import { signOut } from "../../store/action/authActions";



const SignedIn=(props)=>{
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn-floating blue lighten-1">
                {
                    props.profile.initials
                }
                </NavLink></li>
        </ul>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signOut:()=>{
            dispatch(signOut())
        }
    }
}


export default connect(null, mapDispatchToProps)(SignedIn);