import React from 'react';
import { connect } from 'react-redux';
import './Movies.css';
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 190,
        minHeight: 275
    },
});

function Movies(props) {
    const classes = useStyles();

    let movie = props.movie
    return (
        <>
            <Grid
                item xs={2}
            >
                <Card className={classes.root}>
                    <CardActionArea onClick={() => props.getDetails(movie.id)}>
                        <CardMedia>
                            <img src={movie.poster} alt={movie.title} />
                        </CardMedia>
                    </CardActionArea>
                </Card>

            </Grid>
        </>
    )

}


export default connect()(Movies);