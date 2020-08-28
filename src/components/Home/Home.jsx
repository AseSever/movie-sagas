import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx'

class Home extends Component {

    componentDidMount = () => {
        this.getMovies();
    } 

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }

    render() {
        return(
            <>
            <div>
                {this.props.reduxState.movies.map((movie, i) => {
                    return(<Movies key={i} movie={movie} />)
                })}
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

export default connect(mapStateToProps)(Home);