import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from "axios";
import UpdateMovieForm from "./components/UpdateMovieForm";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((res) => {
        setMovieList(res.data);
        setIsFetching(false);
      })
      .catch((err) => console.log(err.response));
  };

  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, [isFetching]);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        {isFetching ? <div>Loading...</div> : <MovieList movies={movieList} />}
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} setFetching={setIsFetching} />
      </Route>

      <Route path="/update-movie/:id">
        <UpdateMovieForm setFetching={setIsFetching} />
      </Route>
    </>
  );
};

export default App;
