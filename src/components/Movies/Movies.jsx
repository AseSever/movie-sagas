import React, { Component } from 'react';

class Movies extends Component {
    render() {
        let movie = this.props.movie
        return(
            <>
                <p>{movie.title}</p>
            </>
        )
    }
}


export default Movies;