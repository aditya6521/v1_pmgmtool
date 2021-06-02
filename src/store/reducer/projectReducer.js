
const initState={
    projects:[
        {id:"1",title:"test id 1",content:"test id 1 content succesful"},
        {id:"2",title:"test id 2",content:"test id 2 content succesful"},
        {id:"3",title:"test id 33",content:"test id 3 content succesful"}

    ]
};

const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case "CREATE_PROJECT": 
        console.log("created project",action.project);
        return state;
        case "CREATE_PROJECT_ERROR":
            console.log("create project error",action.err);
            return state;
        default:
            return state;
    }
    
}

export default projectReducer;