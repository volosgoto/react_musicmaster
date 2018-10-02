import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      // User search input
      query: ''
    }

  }

  search(){
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.deezer.com/search?';
    const FETCH_URL = `${BASE_URL}q=artist:${this.state.query}`;

    console.log('FETCH_URL', FETCH_URL);
                      
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Music master from App</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="search for artist..."
              value = { this.state.query }
              onChange = { event => { this.setState({query: event.target.value}) } }
              onKeyPress = {event => { 
                if (event.key === 'Enter') {
                  this.search();
                }
               }}
            />
            <InputGroup.Addon onClick = { ()=> this.search() }>
            <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
          </FormGroup>
        {/* <div>
          <input placeholder=""/>
          <button>Search</button>
        </div> */}
        <div className="Profile"> 
          <div>Artist name</div>
          <div>Artist picture</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;