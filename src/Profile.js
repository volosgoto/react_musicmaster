import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    
    let artist = {artist : {artist : {name: '', rank: ''} }};
      
    if (this.props.artist !== null)  {
      // console.log('props', this.props);
      console.log('props.artist', this.props.artist);
      artist = this.props.artist;
    }
      

    return (
      <div>
        <div>{ artist.artist.name }</div>
        <div>{ artist.rank }</div>
      </div>
    )
  }
}


export default Profile;