import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css';
// MATERIAL-UI
import clsx from 'clsx';
import {
    Typography,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    IconButton,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 500,
    },
    div: {
        flexFlow: 1,
        margin: 10,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));


function Details(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    let { id } = useParams();
    console.log(useParams());

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const goToList = () => {
        props.history.push('/')
    }

    let details = props.reduxState.details
    console.log(props.reduxState.movieGenres);


    return (
        <div className={classes.div}>
            <h3>{id}</h3>
            <Grid
                container
                direction="row"
                justify="center"
            >
                <Grid item xs={4}>
                    <Card className={classes.root}>
                        <CardHeader
                            title={details.title}
                        >
                        </CardHeader>
                        <CardMedia>
                            <img src={details.poster} alt={details.description} />
                        </CardMedia>
                        <CardActions disableSpacing>
                            <IconButton
                                aria-label='Go back to Movies'
                                onClick={goToList}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    {details.description}
                                </Typography>
                                <ul>
                                    <Typography>
                                        {props.reduxState.movieGenres.map((genre, i) => {
                                            return (<li key={i}>{genre.name}</li>)
                                        })}

                                    </Typography>
                                </ul>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Details);