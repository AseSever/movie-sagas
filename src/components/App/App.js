import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, useParams} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList.jsx';
import Details from '../Details/Details.jsx';
import AddMovie from '../AddMovie/AddMovie';
//MATERIAL-UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// Ecru #BFB48F
// Dark Liver #564E58
// Cardovan #904E55
// Isabelline #F2EFE9
// Raisin black #252627

const customeTheme = createMuiTheme({
  //theme settings
  palette: {
    primary: {
      main: '#F2EFE9',
    },
    secondary: {
      main: '#BFB48F',
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

            <Route path="/addmovie" component={AddMovie} />
            
            <Route path="/details" component={Details} />
            
            {/* ADD PAGES! */}
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
