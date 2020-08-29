import React, { Component } from 'react';
import {HashRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home.jsx';
import Details from '../Details/Details.jsx';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={Details} />
          {/* ADD PAGES! */}
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
