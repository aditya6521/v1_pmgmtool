export const createProject=(project)=>{
    return (dispatch,getState)=>{
        //async

        dispatch({type:"CREATE_PROJECT",project});

    }
};

