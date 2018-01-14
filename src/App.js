import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import logo from './logo.svg';
import NavBar  from './components/NavBar';
import './App.css';
import HomePage from './components/Home';
import Contact from './components/Contact'
import Terms from './components/Terms'

class App extends Component {
  render() {
    return (
    <Router>

      <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <NavBar />
            </header>

          <div className="main">
              <Route exact path="/" component={HomePage} />
              <Route path='/contact' component={Contact} />
              <Route path='/terms' component={Terms} />
          </div>

       <div className="footer" >
        <img src={logo} className="footer-logo" alt="logo" />
        <div className="footer-links">
            <a href="/contact" >Contact</a>

            <a href="/terms">Terms of Use</a>
          <p>© 2018 Octagon</p>
        </div>
       </div>
      </div>
    </Router>
    );
  }
}

export default App;
