import React from 'react'
import Movies from './Movies.jsx'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import MovieDetails from './MovieDetails.jsx';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <div className="moviesTitleContainer">
                  <Link to="/"><h2 className="moviesTitle">Movies</h2></Link>
                </div>                
                <Switch>
                <Route path="/:movieId">
                    <MovieDetails />
                </Route>
                <Route path="/">
                    <Movies />
                </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
