import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {get} from '../functions/httpReq'
import styles from '../estilos/MovieDetails.module.css'
import Spinner from './Spinner'

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        get(`/movie/${movieId}`)
        .then(data=> {
            setMovie(data);
            setIsLoading(false);
        })
        .catch(err => console.log(err.message))
    }, [movieId]);
    if(isLoading){
        return <Spinner />
    }
    const image = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    return (     
        <div className={styles.details}>
            
            <img src={image} alt={movie.title} className={styles.image} />
            
            
            <div className={styles.col}>
                <p className={styles.firstItem}><strong>Title: </strong>{movie.title}</p>
                <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetails
