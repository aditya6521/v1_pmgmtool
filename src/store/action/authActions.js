

const SignIn=(credantials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credantials.email,
            credantials.password
        ).then(()=>{
            dispatch({type:"Login_Success"});
        }).catch((err)=>{
            dispatch({type:"Login_error",err});
        })
    }

}

export default SignIn;