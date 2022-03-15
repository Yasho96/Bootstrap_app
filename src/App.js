import './styles/App.css';
import {NavBar} from "./components/NavBar";
import {Grids} from "./components/GridsBootStrap";
import Cards from "./components/Cards";
import {TypeAhead} from "./components/Typeahead";

function App() {
  return (
    <div className= "App" >
      <body className='main-body'>
        <NavBar />         
        <TypeAhead />
        <Grids />
        <Cards /> 
      </body>
    </div>

  );
}

export default App;
