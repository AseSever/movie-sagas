import React from 'react';
//MATERIAL-UI
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: 400,
    },
}));


function DescriptionTextfield(props) {
    const classes = useStyles();

    return (

        <div>
            <TextField
                className={classes.formControl}
                value={props.description}
                onChange={(event) => props.handleChange(event, 'description')}
                id="outlined-multiline-static"
                label="Movie Description"
                multiline
                rows={4}
                variant="outlined"
            />
        </div>
    )
}

export default DescriptionTextfield;