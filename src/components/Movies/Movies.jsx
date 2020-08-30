import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Movies.css';
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from '@material-ui/core';
import {
    withStyles,
    createStyles
} from '@material-ui/core/styles';

const muiStyles = (theme) => createStyles({
    // styles for cards
    posters: {
        width: 190
    }
})

class Movies extends Component {


    render() {
        let movie = this.props.movie
        return (
            <>
                <Grid
                    item xs={3}
                    
                    className="poster"
                >
                    <Card>
                        <CardActionArea onClick={() => this.props.getDetails(movie.id)}>
                            <CardMedia>
                                <img src={movie.poster} alt={movie.title} />
                            </CardMedia>
                        </CardActionArea>
                    </Card>

                </Grid>
            </>
        )
    }
}


export default connect()(
    withStyles(muiStyles)(Movies)
);