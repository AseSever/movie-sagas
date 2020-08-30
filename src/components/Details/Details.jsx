import React from 'react';
import { connect } from 'react-redux';
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
        maxWidth: 500,
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const goToList = () => {
        props.history.push('/')
    }

    let details = props.reduxState.details
    return (
        <div className={classes.div}>
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