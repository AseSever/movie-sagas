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
}

// generator for movie details
function* getDetails(action) {
    console.log(action.payload);
    try {
        let response = yield axios.get(`/api/movie/details/${action.payload}`)
        console.log(response.data);
        yield put({ type: 'SET_DETAILS', payload: response.data })
    } catch (err) {
        console.log('Error with getDetails saga', err);
    }
}

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
} // end getMovies

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Use to store details data for each page
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
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>,
    document.getElementById('root'));
registerServiceWorker();
