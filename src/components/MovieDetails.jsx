import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {get} from '../functions/httpReq'
import styles from '../estilos/MovieDetails.module.css'

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get(`/movie/${movieId}`)
        .then(data=> {
            setMovie(data);
        })
        .catch(err => console.log(err.message))
    }, [movieId]);
    if(!movie){
        return null;
    }
    const image = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return (     
        <div className={styles.details}>
            <img src={image} alt={movie.title} className={`${styles.col} ${styles.image}`} />
            <div className={styles.col}>
                <p><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails
