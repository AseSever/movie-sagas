import React, { Component } from 'react';
import { connect } from 'react-redux';


class Movies extends Component {


    render() {
        let movie = this.props.movie
        return (
            <>
                <div onClick={() => this.props.getDetails(movie.id)}>
                    <img src={movie.poster} alt={movie.description} />
                </div>

            </>
        )
    }
}


export default connect()(Movies);