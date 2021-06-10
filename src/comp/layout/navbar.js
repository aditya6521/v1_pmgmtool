import React from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import SignedIn from "./signedIn";
import SignedOut from "./signedOut";



const Navbar=()=>{
    return(
        <nav className="nav-wrapper black darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Heloo</Link>
                <SignedIn/>
                <SignedOut/>
            </div>
        </nav>
    ) 
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{

    }
}

export default connect(mapStateToProps)(Navbar);