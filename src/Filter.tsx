import { useEffect } from "react"

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(popular);
            return;
        }
        const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenre)
        );
        setFiltered(filtered)
    }, [activeGenre])

    return (
        <div className="filter-container">
            <button
                onClick={() => { setActiveGenre(0) }}
                className={activeGenre === 0 ? "active" : ""}
            >
                All
            </button>

            <button
                onClick={() => { setActiveGenre(35) }}
                className={activeGenre === 0 ? "active" : ""}
            >
                Comedy
            </button>

            <button
                onClick={() => { setActiveGenre(28) }}
                className={activeGenre === 0 ? "active" : ""}
            >
                Action
            </button>
        </div>
    )
}

export default Filter;