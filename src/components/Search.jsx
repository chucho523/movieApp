import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styles from '../estilos/Search.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useQuery} from '../hooks/useQuery.jsx'

const Search = () => {

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        setSearchText(search || "");
    }, [search])
    const handleChange = (e) => {
        e.preventDefault();
        history.push(`/movieApp/?search=${searchText}`);
    }
    const [searchText, setSearchText] = useState("");
    const history = useHistory();
    return (
        <form onSubmit={handleChange} className={styles.searchContainer}>
            <div className={styles.searchBox}>
                <input 
                        className={styles.input} 
                        type="text" 
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}  
                />
                <button className={styles.button} type="submit"><FontAwesomeIcon icon={faSearch}/></button>
            </div>
        </form>
    )
}

export default Search
