import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    
    let artist = { artist : {
                      artist : {
                        name: '', 
                        rank: '', 
                        picture: '', 
                        tracklist: ''
                      } 
                    },
                    album: {
                      title: '',
                      cover: '',
                      // tracklist: data[{}]
                      tracklist: ''
                  
                    } 
                  };
      
    artist = this.props.artist !== null ? this.props.artist : artist;
    // console.log('props', this.props);
    
    
    return (
      <div>
        
        <div className = "profile-info">
          <div className = "profile-name">Artist: { artist.artist.name }</div>
          <img className="profile-img" src={artist.artist.picture } alt="Artist profile"/> 
          <div>Album: {artist.album.title}</div> 
          <div>Tracks: {artist.album.tracklist.title }</div> 
          <img className="album-img" src={artist.album.cover } alt="Album cover"/> 
          <div>Rank: { artist.rank}</div> 
          <div><a href={artist.preview}>Song Preview</a></div>
        </div>
        
      </div>
    )
  }
}


export default Profile;