import React, { Component } from 'react';
import './MovieList.css';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx';
// MATERIAL-UI
import {
    Grid,
    Button,
} from '@material-ui/core';

class MovieList extends Component {

    // on mount will get our movies for render
    componentDidMount = () => {
        this.getMovies();
    }

    // onclick of a movie poster to send to a details page
    getDetails = (id) => {
        console.log('click');
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: id });
        console.log(this.props.history);
        this.props.history.push(`/details/${id}`)
    }

    // dispatch to get request saga
    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    //click button, got to add movie page
    gotToAddMovie = () => {
        this.props.history.push('/addmovie');
    }

    render() {
        return (
            <>
                <div >
                    <Grid>
                        <Button
                            className="add-movie" 
                            variant="contained"
                            onClick={this.gotToAddMovie}
                        >
                            Add Movie
                        </Button>
                    </Grid>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justify="flex-start"
                    >
                        {this.props.reduxState.movies.map((movie, i) => {
                            return (
                                <Movies key={i} movie={movie} getDetails={this.getDetails} />
                            )
                        })}
                    </Grid>

                </div>
            </>
        )
    }
}


const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(MovieList);