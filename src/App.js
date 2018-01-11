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

       <div className="main" > 
         <div className="heroImage-container" id="fullwidth"> 
          <img
              src={'http://www.returnofkings.com/wp-content/uploads/2015/01/american-hero1.jpg'} className="heroImage" id="reduceHeight"
          />
         </div>

         <div className="text" >
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

         </div>
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
    );
  }
}

export default App;
