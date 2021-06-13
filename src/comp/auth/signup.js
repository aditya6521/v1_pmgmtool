import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/action/authActions';

class signup extends Component {
    state={
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        this.props.signUp(this.state);
         }


    render() {
        const {auth, authError}=this.props;
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}  className="white">
                    <h5 className="gret-text text-darken-3"> Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <button className="btn pink lighten-1 z-depth-0">
                            SignUp
                        </button>
                    </div>
                    <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null}
                    </div>
                    

                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(signup);
