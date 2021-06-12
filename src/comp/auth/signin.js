import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../../store/action/authActions';


class signin extends Component {
    state={
        email:"",
        password:""
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(this.state);
       this.props.SignIn(this.state);
         }


    render() {
        const {authError}=this.props;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}  className="white">
                    <h5 className="gret-text text-darken-3"> Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <button className="btn pink lighten-1 z-depth-0">
                            Login
                        </button>
                        <div className="red-text center">
                            {
                                authError ? <p>{authError}</p> : null
                            }
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        authError:state.auth.authError
    }
}

const mapDispatchTOProps=(dispatch)=>{
    return{
        SignIn: (creds)=>{
            dispatch(SignIn(creds))
        }
    }
}


export default connect(mapStateToProps,mapDispatchTOProps)(signin);
