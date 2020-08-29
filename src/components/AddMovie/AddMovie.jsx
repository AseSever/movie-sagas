import React, { Component } from 'react';
import './AddMovie.css';
import { connect } from 'react-redux';


class AddMovie extends Component {

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
        }
    }

    handleSaveMovie = (event) => {
        event.preventDefault();
        console.log('clicky');
        
    }

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
                            <input type="submit" value="Save" />
                        </section>
                    </form>
                </div>
            </>
        )
    }
}



export default AddMovie