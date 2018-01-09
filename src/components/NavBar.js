import React from 'react';
import { NavLink } from 'react-router-dom';
import {  Button } from 'react-bootstrap'

const NavBar = props => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px', marginLeft: '12px', marginRight: '10px'}}>
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
