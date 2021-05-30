import React from "react";
import {NavLink} from "react-router-dom";


const SignedIn=()=>{
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">LogOut</NavLink></li>
            <li><NavLink to="/" className="btn-floating blue lighten-1">Ava</NavLink></li>
        </ul>
    )
}

export default SignedIn;