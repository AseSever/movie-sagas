import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies.jsx'

class Home extends Component {

    componentDidMount = () => {
        this.getMovies();
    } 
    getDetails = (id) => {
        console.log('click');
        this.props.dispatch({type: 'FETCH_DETAILS', payload: id});
        console.log(this.props.history);
        this.props.history.push(`/details/${id}`)
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }

    render() {
        return(
            <>
            <div>
                {this.props.reduxState.movies.map((movie, i) => {
                    return(<Movies key={i} movie={movie} getDetails={this.getDetails}/>)
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