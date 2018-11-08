import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      number: '',
      formatted: ''
    };

    this.onInputChange = this.onInputChange.bind( this );
    this.onSubmit = this.onSubmit.bind( this );
  }

  onInputChange( event ) {    
    this.setState({
      number: event
    })    
  }

  onSubmit( event ) {
    event.preventDefault();
    const phoneNumber = this.state.number.replace(/-|\s+/g, '');
    const formattedNumber = `+1${phoneNumber}`;
    this.setState({
      formatted: formattedNumber
    })
  }

  render() {
    return (
      <div id="App">        
        <div>
          <form onSubmit={this.onSubmit} >
            <span>
              <label>Phone Number:</label> 
              <input                     
                  name='phone'
                  placeholder='123 456 7890'
                  pattern='[0-9]{3}[ -][0-9]{3}[ -][0-9]{4}' 
                  onChange={ e => this.onInputChange( e.target.value ) } />
            </span>
            <span>
              <Button name='submit' textVal='Submit' />              
              <Button name='reset' textVal='Clear' />
            </span>
          </form>
          <div>
            <span>Formatted for USA: </span>
            <a href='tel:{this.state.formatted}'>{this.state.formatted}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
