import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      // User search input
      query : '',
      artist : null
    }
  }

  search(){
    // console.log('this.state', this.state);
    const BASE_URL = 'https://cors-anywhere.herokuapp.com/';  // ITS DONT WORK
    let FETCH_URL = `${BASE_URL}http://api.deezer.com/search/track/autocomplete?limit=1&q=${this.state.query}`;
    
    fetch(FETCH_URL, {
      method: "GET"
      }
    )
      .then(response => response.json())
      .then(json => {
        let artist = json.data[0];

        // console.log('artist', artist);

        this.setState({ artist : artist})
        
        let fetchTrackList = BASE_URL + artist.artist.tracklist;
        fetch(fetchTrackList)
            .then(response => response.json())
            .then(json => {
              let tracks = json.data[0].title;
              this.setState( { tracks } );
            })
            .catch(err => console.log('track error fetch data', err));
          })
      .catch(err => console.log('artist error fetch data', err));
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
          {
            this.state.artist !== null 
            ? <div>
                  <Profile artist = {this.state.artist}/>
                  <Gallery 
                    tracks = { this.state.tracks }
                  />
              </div>
            : <div></div>
          }

      </div>
    );
  }
}

export default App;