import './styles/App.css';
import {NavBar} from "./components/NavBar";
import {Grids} from "./components/GridsBootStrap";
import {Cards} from "./components/Cards";

function App() {
  return (
    <div className= "App">
      <NavBar /> 
      <Grids />
      <Cards /> 
    </div>

  );
}

export default App;
