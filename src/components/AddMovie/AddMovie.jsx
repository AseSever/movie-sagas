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

    handleSaveMovie = () => {
        console.log('clicky');
        
    }

    handleChange = (event, movie) => {
        this.setState({
            newMovie: {
                ...this.state.newProduct,
                [movie]: event.target.value
            }
        })
    }

    render() {
        return (
            <>
                <div>
                    <form className="form" onSubmit={this.handleSaveMovie}>
                        <section className="form-section">
                            <input type="text" placeholder="Movie" 
                                value={this.state.newMovie.title}
                                onChange={(event) => this.handleChange(event, 'title')} 
                            />
                        </section>
                        <section className="form-section">
                            <input type="text" placeholder="Poster Url" 
                                value={this.state.newMovie.poster}
                                onChange={(event) => this.handleChange(event, 'poster')}
                            />
                        </section>
                        <section className="form-section">
                            <input className="description" type="text" placeholder="Moive Description"
                                value={this.state.newMovie.description}
                                onChange={(event) => this.handleChange(event, 'description')}
                            />
                        </section>
                        <section className="form-section">
                            <input type="submit" value="Save" 
                            />
                        </section>
                    </form>
                </div>
            </>
        )
    }
}



export default AddMovie