import React, { useState, useEffect } from 'react';
import './MovieList.css';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx';
// MATERIAL-UI
import {
    Grid,
    Button,
} from '@material-ui/core';

function MovieList(props) {

    

    // onclick of a movie poster to send to a details page
    const getDetails = (id) => {
        console.log('click');
        props.dispatch({ type: 'FETCH_DETAILS', payload: id });
        console.log(props.history);
        props.history.push(`/details/${id}`)
    }

    // dispatch to get request saga
    const getMovies = () => {
        props.dispatch({ type: 'FETCH_MOVIES' })
    }

    //click button, got to add movie page
    const gotToAddMovie = () => {
        props.history.push('/addmovie');
    }

    // on mount will get our movies for render
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
            >
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={gotToAddMovie}
                    >
                        Add Movie
                    </Button>
                </Grid>
                    {/* mapping the database of movies to render */}
                    {props.reduxState.movies.map((movie, i) => {
                        return (
                            <Movies key={i} movie={movie} getDetails={getDetails} />
                        )
                    })}
            </Grid>
        </div>
    )
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(MovieList);