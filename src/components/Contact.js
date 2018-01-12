import React, { Component } from 'react';


class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      avatar: ''
    };
  }

  validateFirstName = event => {
    var letters = /^[A-Za-z]+$/;  

    if( event.target.value.match(letters) ){
      this.setState({
        [event.target.className]: event.target.value        
      });

      return true;
    }
    else {
      alert("characters only")
      event.target.value = event.target.defaultValue
      return false;
    }
  }

render(){
    return (
       <form className="form">
         <h2>Sign up</h2>
         <div className="form-group">
           <label htmlFor="firstName">First Name</label>
           <input type="text" className="firstName" onChange={ this.validateFirstName.bind(this) }
             name="firstName" />
         </div>
         <div className="form-group">
           <label htmlFor="email">Email address</label>
           <input type="email" className="form-control"
             name="email" />
         </div>
         <button type="submit" className="btn btn-primary">
            Sign up
         </button>
       </form>
    );
  }
};  


export default Contact;