import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Button } from 'react-bootstrap'

const NavBar = props => {
  return (
    <div className="NavBar">
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
      </Button>
      <Button bsStyle="default" bsSize="small" active>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/contact"
        >
          Contact
        </NavLink>
      </Button>
    </div>   
  );
};

export default NavBar;
