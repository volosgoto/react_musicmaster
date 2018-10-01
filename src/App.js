import React, {Component} from 'react';


class App extends Component {
  
  render(){
    return(
      <div>
        <div className="App-title">
          Music master from App
          </div>
        <div>
          <input placeholder="search for artist..."/>
          <button>Search</button>
        </div>
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