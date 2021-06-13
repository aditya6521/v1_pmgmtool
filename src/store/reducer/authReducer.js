
const initState={
    authError:null
}

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
            case "SignOut_success":
                console.log("SignOut_success")
                return state;
            case "SignUp_Success":
                console.log("signUp_Success");
                return {
                    ...state,
                    authError:null
                }
            case "SignUp_Error":
                console.log(action.err.message);
                return {
                    ...state,
                    authError:action.err.message
                }
            default:
                return state;
    }
    
}

export default authReducer;