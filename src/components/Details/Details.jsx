import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

    render() {
        return(
            <>
            <div>
                <p></p>
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