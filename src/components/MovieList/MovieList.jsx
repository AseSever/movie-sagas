import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx'

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
                <div>
                    <div>
                        <button onClick={this.gotToAddMovie}>Add Movie</button>
                    </div>
                    <div>
                        {this.props.reduxState.movies.map((movie, i) => {
                            return (<Movies key={i} movie={movie} getDetails={this.getDetails} />)
                        })}
                    </div>

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