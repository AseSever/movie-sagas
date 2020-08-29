import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectMenu extends Component {
    render() {
        return (
            <>
                {this.props.reduxState.genres.map((genre, i) => {
                    return (<option key={i} value={i}>{genre.name}</option>)
                })}
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(SelectMenu)