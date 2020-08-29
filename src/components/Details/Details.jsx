import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    goToList = () => {
        this.props.history.push('/')
    }

    render() {
        let details = this.props.reduxState.details
        console.log(details);
        return (
            <>
                <div>
                    <button onClick={this.goToList}>Back to list</button>
                    <h1>{details.title}</h1>
                    <img src={details.poster} alt={details.description} />
                    <p>{details.description}</p>
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

export default connect(mapStateToProps)(Details);