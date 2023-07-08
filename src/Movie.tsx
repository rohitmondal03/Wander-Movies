import { motion } from "framer-motion"


const Movie = ({ movie }): JSX.Element => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
        >
            <h2>{movie.title}</h2>
            <img
                src={"https://image.tmdb.org/t/p/w200" + movie.poster_path}
                alt=""
            />
        </motion.div>
    )
}

export default Movie;