import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";

// {auth.isLoaded && links}

const Navbar=(props)=>{
    const {auth,profile}= props;
    //console.log(auth);
    const links=auth.uid ? <SignedIn profile={profile}/> : <SignedOut/>;

    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Heloo</Link>
                {auth.isLoaded && links}
            </div>
        </nav>
    ) 
}

const mapStateToProps=(state)=>{
    //console.log(state);
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);