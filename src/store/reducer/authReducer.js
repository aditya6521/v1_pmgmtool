
const initState={
    authError:null
};

const authReducer=(state=initState,action)=>{
    switch(action.type){
        case"Login_error":
        console.log("logn faileddddd");
        return {
            ...state,
            authError:"login failed"
        }
        case "Login_Success":
            console.log("logined");
            return{
                ...state,
                authError:null
            }
            default:
                return state;
    }
    
}

export default authReducer;