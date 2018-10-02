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


  render(){
    return(
      <div className="App">
        <div className="App-title">Music master from App</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="search for artist..."
            />
            <InputGroup.Addon>
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