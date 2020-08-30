import React, { Component } from 'react';
import './AddMovie.css';
import { connect } from 'react-redux';
import SelectMenu from '../SelectMenu/SelectMenu';
import DescriptionTextfield from '../DescriptionTextfield/DescriptionTextfield';
import TitlePosterInput from '../TitlePosterInput/TitlePosterInput';
// MATERIAL-UI
import {
    Button,
    TextField,
    Grid,
} from '@material-ui/core';




class AddMovie extends Component {

    // fetching genres from the database for my menu list
    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_GENRES' });
    }

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    // sends new movie info to post request saga
    handleSaveMovie = (event) => {
        event.preventDefault();
        console.log('clicky');
        if (this.state.newMovie.title !== '' && this.state.newMovie.poster !== '') {
            this.props.dispatch({ type: 'SEND_NEWMOVIE', payload: this.state.newMovie })
            this.props.history.push('/');
        } else {
            alert('Cannot save a new movie without giving a movie and a poster')
        };
    } // end handleSaveMovie

    // this is setting our state for a post request
    handleChange = (event, movie) => {
        console.log(`in change ${movie}`);
        this.setState({
            newMovie: {
                ...this.state.newMovie,
                [movie]: event.target.value
            }
        })
    } // end handleChange

    // for cancelling the add movie process and going back to home page
    handleCancel = (event) => {
        event.preventDefault();
        this.props.history.push('/')
    } // end handleCancel

    render() {
        console.log(this.state);
        return (
            <>
                <div>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="space-around"
                    >
                        <Grid item xs={12}>
                            <h2>Add a Movie!!</h2>
                        </Grid>
                        <form
                            onSubmit={this.handleSaveMovie}
                            className="form"
                            noValidate autoComplete="on"
                        >
                            <Grid item>
                                <Button 
                                    type="submit" 
                                    variant="contained"
                                >
                                    Save
                                </Button>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Button
                                    onClick={this.handleCancel}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <TitlePosterInput
                                title={this.state.newMovie.title}
                                poster={this.state.newMovie.poster}
                                handleChange={this.handleChange}
                            />
                            <section className="form-section">
                                {/* Textfield component for description */}
                                <DescriptionTextfield
                                    description={this.state.newMovie.description}
                                    handleChange={this.handleChange}
                                />
                            </section>
                            {/* Select menu component */}
                            <section className="form-section">
                                <SelectMenu
                                    genre_id={this.state.newMovie.genre_id}
                                    handleChange={this.handleChange}
                                />
                            </section>
                        </form>
                    </Grid>
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

export default connect(mapStateToProps)(AddMovie);