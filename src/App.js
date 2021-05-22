import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './comp/layout/navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
