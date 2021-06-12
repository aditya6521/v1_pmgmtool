
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

const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:"SignOut_success"});
        });
    }
}




export {SignIn,signOut};