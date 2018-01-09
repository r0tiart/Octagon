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
              <Route exact path="/"  />
              <Route path='/contact'  />
            </div>
        </Router>
        </header>
       <div className="heroImage-container" id="fullwidth"> 
        <img
            src={'http://www.returnofkings.com/wp-content/uploads/2015/01/american-hero1.jpg'} className="heroImage"
        />
       </div>
       </div>
    );
  }
}

export default App;
