import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from './comp/layout/navbar';
import Dashboard from './comp/dashboard/dashboard';
import projectDetails from './comp/project/projectDetails';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={projectDetails}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}


export default App;
