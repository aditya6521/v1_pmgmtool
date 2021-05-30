import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './comp/layout/navbar';
import Dashboard from './comp/dashboard/dashboard';
import projectDetails from './comp/project/projectDetails';
import signin from './comp/auth/signin';
import signup from './comp/auth/signup';
import CreateProject from './comp/project/createProject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={projectDetails}/>
        <Route path="/signin" component={signin}/>
        <Route path="/signup" component={signup}/>
        <Route path="/create" component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
