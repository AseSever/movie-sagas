import React from 'react';
import { connect } from 'react-redux';
import './Movies.css';
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardHeader,
    Avatar,
    CardContent,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        minHeight: 275
    },
    avatar: {
        backgroundColor: '#BFB48F',
    },
});

function Movies(props) {
    const classes = useStyles();

    let movie = props.movie
    console.log(movie);
    return (
        <>
            <Grid
                item xs={3}
            >
                <Card className={classes.root}>
                    <CardActionArea onClick={() => props.getDetails(movie.id)}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="movie" className={classes.avatar}>
                                    MS
                            </Avatar>
                            }
                            title={movie.title}
                        />
                        <CardMedia>
                            <img src={movie.poster} alt={movie.title} />
                        </CardMedia>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {movie.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Grid>
        </>
    )

}


export default connect()(Movies);