
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

const signUp=(newUser)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection("users").doc(resp.user.uid).set({
                firstname:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(()=>{
            dispatch({type:"SignUp_Success"})
        }).catch(err=>{
           // console.log(err.message);
            dispatch({type:"SignUp_Error",err})
        })
    }
}



export {SignIn,signOut,signUp};