import React, { useEffect } from 'react';
import './MovieList.css';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx';
// MATERIAL-UI
import {
    Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listControl: {
        marginTop: 10,
    },
}));
    

function MovieList(props) {
    const classes = useStyles();

    // onclick of a movie poster to send to a details page
    const getDetails = (id) => {
        props.dispatch({ type: 'FETCH_DETAILS', payload: id });
        props.history.push(`/details/${id}`)
    }

    // dispatch to get request saga
    const getMovies = () => {
        props.dispatch({ type: 'FETCH_MOVIES' })
    }

    // on mount will get our movies for render
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className={classes.listControl}>
            <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
            >
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