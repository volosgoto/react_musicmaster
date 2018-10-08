import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    
    let artist = {artist : {artist : {name: '', rank: '', picture: ''} }};
      
    // if (this.props.artist !== null)  {
    //   // console.log('props', this.props);
    //   console.log('props.artist', this.props.artist);
    //   artist = this.props.artist;
    // }
      
    artist = this.props.artist !== null ? this.props.artist : artist

    
    return (
      <div>
        <div>Artist: { artist.artist.name }</div>
        <img className="profile-img" src={artist.artist.picture } alt="Artist profile img"/>
        <div>Rank: { artist.rank}</div>
        <div><a href={artist.preview}>Song Preview</a></div>
      </div>
    )
  }
}


export default Profile;