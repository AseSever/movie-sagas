import React, { Component } from 'react';

class Movies extends Component {
    render() {
        let movie = this.props.movie
        return (
            <>
                <div>
                    <p>{movie.title}</p>
                    <img src={movie.poster} alt={movie.description} />
                </div>

            </>
        )
    }
}


export default Movies;