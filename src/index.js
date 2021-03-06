import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', getMovies);
    yield takeEvery('FETCH_DETAILS', getDetails);
    yield takeEvery('FETCH_GENRES', getGenres);
    yield takeEvery('SEND_NEWMOVIE', postNewMovie);
    yield takeEvery('FETCH_MOVIE_GENRES', getMovieGenres);
}

// generator for posting a new movie
function* postNewMovie(action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/movie', action.payload)
    } catch (err) {
        console.log('Error in postNewMovie', err);
    }
} // end postNewMovie generator

// generator for getting genres
function* getGenres() {
    try {
        let response = yield axios.get('/api/genre')
        console.log(response.data);
        yield put({ type: 'SET_GENRES', payload: response.data })
    } catch (err) {
        console.log('Error with getGenres', err);
    }
}

function* getMovieGenres(action) {
    try {
        let response = yield axios.get(`/api/genre/${action.payload}`)
        console.log(response.data);
        yield put({ type: 'SET_MOVIE_GENRES', payload: response.data})
    } catch (err) {
        console.log('Error with getMovieGenres', err);
    }
} // get

// generator for movie details
function* getDetails(action) {
    console.log(action.payload);
    try {
        let response = yield axios.get(`/api/movie/details/${action.payload}`)
        console.log(response.data);
        yield put({ type: 'SET_DETAILS', payload: response.data[0] })
    } catch (err) {
        console.log('Error with getDetails saga', err);
    }
} // end getDetails saga

// generator function for fetching movies from the database
function* getMovies() {
    try {
        let response = yield axios.get('/api/movie')
        console.log(response.data);
        //send response.data to the movie reducer
        yield put({ type: 'SET_MOVIES', payload: response.data })

    } catch (err) {
        console.log('Error in getMovies saga', err);
    }
} // end getMovies saga

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const movieGenres = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store details data for each page
const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        movieGenres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
