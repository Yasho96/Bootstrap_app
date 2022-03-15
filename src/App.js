import './styles/App.css';
import {NavBar} from "./components/NavBar";
import {Grids} from "./components/GridsBootStrap";
import Cards from "./components/Cards";
import {TypeAhead} from "./components/Typeahead";
import SearchBar from "./components/SearchBar";
import BookData from "./db/Data.json";

function App() {
  return (
    <div className= "App" >
      <body className='main-body'>
        <NavBar />         
        <TypeAhead />
        <SearchBar placeholder="Enter a Book Name..." data={BookData} />
        <Grids />
        <Cards /> 
      </body>
    </div>

  );
}

export default App;
