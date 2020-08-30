import React, { Component } from 'react';
import './AddMovie.css';
import { connect } from 'react-redux';
import SelectMenu from '../SelectMenu/SelectMenu';
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
        } else {
            alert('Cannot save a new movie without giving a movie and a poster')
        }
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
        console.log(this.state);
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
                    <Grid container justify="center">
                        <Grid container direction="row" justify="flex-end">
                            
                            <Button
                                onClick={this.handleCancel}
                                variant="contained"
                                color="secondary"
                            >
                                Cancel
                            </Button>
                            
                        </Grid>
                        <form
                            onSubmit={this.handleSaveMovie}
                            className="form"
                            noValidate autoComplete="on"
                        >
                            <section className="form-section">
                                <TextField
                                    value={this.state.newMovie.title}
                                    onChange={(event) => this.handleChange(event, 'title')}
                                    id="outlined-basic"
                                    label="Movie"
                                    variant="outlined"
                                />
                            </section>
                            <section className="form-section">
                                <TextField
                                    value={this.state.newMovie.poster}
                                    onChange={(event) => this.handleChange(event, 'poster')}
                                    id="outlined-basic"
                                    label="Poster Url"
                                    variant="outlined"
                                />
                            </section>
                            <section className="form-section">
                                <TextField
                                    value={this.state.newMovie.description}
                                    onChange={(event) => this.handleChange(event, 'description')}
                                    id="outlined-multiline-static"
                                    label="Movie Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </section>
                            <section className="form-section">
                                <select
                                    onChange={(event) => this.handleChange(event, 'genre_id')}
                                >
                                    <option>Select Genre</option>
                                    {/* Select Menu is mapping genres and generting all genre selections */}
                                    <SelectMenu />
                                </select>
                            </section>
                            <section className="form-section">
                                <Button type="submit" variant="contained">Save</Button>
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