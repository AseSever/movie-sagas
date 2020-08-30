import React from 'react';
// MATERIAL_UI
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 400,
    },
}));

function TitlePosterInput(props) {
    const classes = useStyles();

    return (
        <div>
                <section className="form-section">
                    <TextField
                        className={classes.formControl}
                        value={props.title}
                        onChange={(event) => props.handleChange(event, 'title')}
                        id="outlined-basic"
                        label="Movie"
                        variant="outlined"
                    />
                </section>
                <section className="form-section">
                    <TextField
                        className={classes.formControl}
                        value={props.poster}
                        onChange={(event) => props.handleChange(event, 'poster')}
                        id="outlined-basic"
                        label="Poster Url"
                        variant="outlined"
                    />
                </section>
        </div>
    )
}

export default TitlePosterInput;