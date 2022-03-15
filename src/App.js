import './styles/App.css';
import {NavBar} from "./components/NavBar";
import {Grids} from "./components/GridsBootStrap";
import Cards from "./components/Cards";
import {Auto} from "./components/Typeahead";

function App() {
  return (
    <div className= "App" >
      <body className='main-body'>
        <NavBar />         
        <Auto />
        <Grids />
        <Cards /> 
      </body>
    </div>

  );
}

export default App;
