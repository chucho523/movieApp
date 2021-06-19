import React, {useEffect, useState} from 'react'
import Movie from './Movie';
import styles from '../estilos/Movies.module.css'
import {get} from '../functions/httpReq' 

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        get("/discover/movie")
        .then((data) => {
            setMovies(data.results);
        })
        .catch(err => console.log(err.message))       
    }, [])
    return (
        <div>
            <ul className={styles.grids}>
                {
                
                movies.map((movie) =>
                    <Movie key={movie.id} movie={movie}></Movie>
                )
                }
            </ul>
        </div>
    )
}

export default Movies
