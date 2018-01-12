import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import logo from './logo.svg';
import NavBar  from './components/NavBar';
import './App.css';
import HomePage from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
              <NavBar />
        </Router>
        </header>

        <Router>
          <div className="main">
            <Route path="/" component={HomePage}/>
            <Route path="/contact" render={() => <div>Contact</div>} />
          </div>
        </Router>

       <div className="footer" >
        <img src={logo} className="footer-logo" alt="logo" />

        <div className="footer-links">
            <a href="/contact" >Contact</a>

            <a href="/terms">Terms of Use</a>
          <p>© 2018 Octagon</p>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
