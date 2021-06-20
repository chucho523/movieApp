import React, {useEffect, useState} from 'react'
import Movie from './Movie';
import styles from '../estilos/Movies.module.css'
import {get} from '../functions/httpReq' 
import Spinner from './Spinner';
import {useQuery} from '../hooks/useQuery.jsx'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search 
            ? `/search/movie?query=${search}`
            :  `/discover/movie`
        get(searchUrl)
        .then((data) => {
            setMovies(data.results);
            setIsLoading(false);
        })
        .catch(err => console.log(err.message))       
    }, [search])
    if(isLoading){
        return <Spinner />
    }
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
