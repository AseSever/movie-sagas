import React from 'react';
import { connect } from 'react-redux';
// MATERIAL-UI
import { MenuItem, FormControl, InputLabel, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 200,
        height: 20,
    },
}));


function SelectMenu(props) {
    const classes = useStyles();

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Select Genre">Genre</InputLabel>
                <Select
                    labelId="Select Genre"
                    id="Select Genre"
                    value={props.genre_id}
                    onChange={(event) => props.handleChange(event, 'genre_id')}
                    label="Age"
                >
                    {props.reduxState.genres.map((genre, i) => {
                        return (<MenuItem key={i} value={genre.id}>{genre.name}</MenuItem>)
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(SelectMenu)