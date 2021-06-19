import React from 'react'
import Movies from './Movies.jsx'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MovieDetails from './MovieDetails.jsx';
import Controls from './Controls.jsx';

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Controls />               
                <Switch>
                <Route path="/movieApp/:movieId">
                    <MovieDetails />
                </Route>
                <Route path="/movieApp">
                    <Movies />
                </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes
