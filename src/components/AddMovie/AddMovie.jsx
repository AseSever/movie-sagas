import React, { Component } from 'react';
import './AddMovie.css';
import { connect } from 'react-redux';
import SelectMenu from '../SelectMenu/SelectMenu';


class AddMovie extends Component {

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        }
    }

    handleSaveMovie = (event) => {
        event.preventDefault();
        console.log('clicky');
    }

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
    }

    render() {
        console.log(this.state);
        return (
            <>
                <div>
                    <form className="form" onSubmit={this.handleSaveMovie}>
                        <section className="form-section">
                            <input
                                value={this.state.newMovie.title}
                                onChange={(event) => this.handleChange(event, 'title')}
                                type="text" placeholder="Movie"
                            />
                        </section>
                        <section className="form-section">
                            <input
                                value={this.state.newMovie.poster}
                                onChange={(event) => this.handleChange(event, 'poster')}
                                type="text" placeholder="Poster Url"
                            />
                        </section>
                        <section className="form-section">
                            <textarea
                                value={this.state.newMovie.description}
                                onChange={(event) => this.handleChange(event, 'description')}
                                type="text" placeholder="Movie Description"
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
                            <input type="submit" value="Save" />
                        </section>
                    </form>
                </div>
            </>
        )
    }
}


export default connect()(AddMovie);