export const createProject=(project)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        //async 
        const firestore=getFirestore();
        firestore.collection("projects").add({
            ...project,
            authorFirstName:"adi",
            authorLastName:"singh",
            authorId:12345,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project});

        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_Error",err});
        }) 
        
        dispatch({type:"CREATE_PROJECT",project});
        

    }
};

