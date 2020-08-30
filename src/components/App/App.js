import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie';
//MATERIAL-UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';
import { lightBlue, orange } from '@material-ui/core/colors';

const newOrange = orange['800']
// orange #FD4C00
// yellow #FCE522
// blue #52C6CF
// grey #706D7A
// darkgrey #1E1E24

const customeTheme = createMuiTheme({
  //theme settings
  palette: {
    primary: {
      main: '#52C6CF',
    },
    secondary: {
      main: newOrange,
    },
  },

});

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <ThemeProvider theme={customeTheme}>
        <div className="App">
          <Header />
          <Router>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addmovie">Add Movie</Link></li>
            </ul>
            <Route exact path="/" component={MovieList} />
            <Route path="/details" component={Details} />
            <Route path="/addmovie" component={AddMovie} />
            {/* ADD PAGES! */}
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
