import React, { Component } from 'react';
import { connect } from 'react-redux';

class Movies extends Component {

    getDetails = (id) => {
        console.log('click');
        this.props.dispatch({type: 'FETCH_DETAILS', payload: id})
    }

    render() {
        let movie = this.props.movie
        return (
            <>
                <div onClick={() => this.getDetails(movie.id)}>
                    <img src={movie.poster} alt={movie.description} />
                </div>

            </>
        )
    }
}


export default connect()(Movies);