import './styles/App.css';
import {NavBar} from "./components/NavBar";
import {Grids} from "./components/GridsBootStrap";
import Cards from "./components/Cards";
import {TypeAhead} from "./components/Typeahead";
// import {InfiniteScroll} from "./components/InfiniteScroll";
import { Posts } from './components/Posts';
//import { LoadingPosts } from './LoadingPosts';
//import SearchBar from "./components/SearchBar";
//import BookData from "./db/Data.json";

function App() {
  return (
    <div className= "App" >
      <body className='main-body'>
        <NavBar />         
        <TypeAhead />
        <Grids />
        <Cards />
         {/* <LoadingPosts /> */}
        <Posts /> 
        {/*<InfiniteScroll/>*/}
      </body>
    </div>

  );
}

export default App;

