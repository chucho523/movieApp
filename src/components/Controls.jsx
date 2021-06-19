import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import styles from '../estilos/Controls.module.css'

const Controls = () => {
    return (
        <div className={styles.moviesTitleContainer}>
            <Link to="/movieApp" className={styles.return}><FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon></Link>
            <h2 className={styles.moviesTitle}>Movies</h2>    
        </div>
    )
}

export default Controls
