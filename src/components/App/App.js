import React, { Component } from 'react';
import {HashRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/addmovie" component={AddMovie} />
          {/* ADD PAGES! */}
        </Router>
      </div>
    );
  }
}

export default App;
