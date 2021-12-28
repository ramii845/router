import { useState } from "react";
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import "./App.css";
import AddMovie from "./components/AddMovie";
import Desc from "./components/Desc";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { moviesData } from "./data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("");

 
  const handleAdd = (newMovie) => setMovies([...movies, newMovie]);
 
  const handleRating = (newRate) => setSearchRating(newRate);
 
  const handleSearch = (e) => setSearchValue(e.target.value);

  return (
    <div>
      <Router>
        
      <Search
        searchRating={searchRating}
        searchValue={searchValue}
        handleRating={handleRating}
        handleSearch={handleSearch}
      />
      <Switch>
        <Route exact path="/"></Route>
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase().trim()) &&
            movie.rating >= searchRating
        )}
      />
      <Route exact path="/film/:id" render={(props)=>
       <Desc movies={movies} {...props}/>} />
      <AddMovie handleAdd={handleAdd} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;