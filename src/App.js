
import './App.css';
import { useEffect, useState } from 'react'; 
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=a8e85418'
const movie1 = {

    "Title": "Shrek",
    "Year": "2001",
    "imdbID": "tt0126029",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
//a8e85418
const App = () => {
  const  searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    console.log(data);
  }
  useEffect(()=> {
    searchMovies('Shrek');

  },[]);

  return (
    <div className = "App">
      <h1>OnionMovies</h1>
      <div className="search">
        <input placeholder ='Search for movies' value="Superman" onChange = {()=>{}}></input>
        <img src = {SearchIcon} alt="Search Icon" onClick={() => {}}></img>
      </div>

      <div className="container">
        <div className ="movie">
          
          <p>{movie1.Year}</p>
         
        </div>
      </div>
 
      

    </div>

  );  
}

export default App;
