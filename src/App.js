import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import logo from './logo.svg';
import NavBar  from './components/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <div className="App">
              <NavBar />
              <Route exact path="/" render={() => <div>Home</div>} />
              <Route path='/contact'  />
            </div>
        </Router>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
