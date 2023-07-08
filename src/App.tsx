import "./App.css"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";

import Movie from "./Movie";
import Filter from "./Filter";


const App = (): JSX.Element => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setactiveGenre] = useState<number>(0);

  const apiKey = import.meta.env.VITE_OMDB_API

  useEffect(() => {
    fetchPopular();
  }, [])

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey
    );

    const movies = await data.json();
    setPopular(movies.results)
    setFiltered(movies.results)
  }

  console.log(popular);


  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setactiveGenre}
      />

      <motion.div
        className="popular-movie"
        style={{marginTop: '3rem'}}
        layout
      >
        <AnimatePresence>
          {filtered.map((movie) => (
            <Movie
              key={movie.id}
              movie={movie}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App;

// https://www.omdbapi.com/?i=tt3896198&apikey=5fbada63