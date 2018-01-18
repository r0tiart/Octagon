import React, { Component } from 'react';


class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      zipcode: '',
      state: ''
    };
  };

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

  validateLastName = event => {
    var validator = /^[A-Za-z-']+$/
    // validator - regex for characters, hyphens and apostrophes 
    if( event.target.value.match(validator) ){
      this.setState({
        [event.target.className]: event.target.value 
      });

      return true;
    }
    else {
      alert("characters, hyphens and apostrophes only")
      event.target.value = event.target.defaultValue
      return false;
    }
  }

  emailCheck = event => {

    if ( !document.getElementsByClassName("email").email.value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        )){// check value to email regex 
            
            return false;
        } 

        return true;
  }

  zipcodeCheck = event => {
    if ( !document.getElementsByClassName("zipcode").zipcode.value.match(/^([0-9]{5}(?:-[0-9]{4})?)*$/) )
        { 
          return false;
        }

        return true;
  }

  validation = event => {
    let validations = {};

    validations.email = this.emailCheck(event);
    validations.zipcode = this.zipcodeCheck(event);

    if ( !validations.email && !validations.zipcode ){
        alert("Please enter valid Email and Zipcode")
        event.preventDefault()
    } else if( !validations.email || !validations.zipcode ){
      let failed = Object.keys(validations).filter( e => validations[e] === false )[0]

      alert(`Please enter valid ${failed}`)
      event.preventDefault()
    }
  }


render(){
    return (
       <form className="form" name="form">
         <h2>Sign up</h2>
         <div className="form-group">
           <label htmlFor="firstName">First Name</label>
           <input type="text" className="firstName" onChange={ this.validateFirstName.bind(this) }
             name="firstName" />
         </div>

         <div className="form-group">
           <label htmlFor="lastName">Last Name</label>
           <input type="text" className="lastName" onChange={ this.validateLastName.bind(this) }
             name="lastName" />
         </div>

         <div className="form-group">
           <label htmlFor="email">Email address</label>
           <input type="email" className="email"
             name="email" />
         </div>

         <div className="form-group">
           <label htmlFor="firstName">Zipcode</label>
           <input type="text" className="zipcode"
             name="zipcode" />
         </div>

         <div>
          <span className="form-group" >US-State</span>
          <select> 
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
         </div>

         <button type="submit" className="btn btn-primary" onClick={ this.validation } >
            Sign up
         </button>
       </form>
    );
  }
};  


export default Contact;