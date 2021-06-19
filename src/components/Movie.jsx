import React from 'react'
import styles from '../estilos/Movie.module.css'
import {Link} from 'react-router-dom'

const Movie = ({movie}) => {
    return (
        <li className={styles.movie}>
            <Link to={`/movieApp/${movie.id}`}>
                <img className={styles.image}
                        width={230}
                        height={345}
                        alt={movie.title}
                        src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}>
                </img> 
                <p className={styles.texto}>{movie.title}</p>
            </Link>
        </li>
    )
}

export default Movie
