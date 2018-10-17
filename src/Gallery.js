import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  render() {
    // let tracks = this.props.tracks;
    let { tracks } = this.props;
      console.log('Gallery props', this.props);


    return (
      // <div>
      //   { tracks.map( (track, k) => {
      //     let trackImg = '';
      //     return (
      //     <div>
            
      //       <div
      //       key = {k}
      //       className = "track"
      //     >
      //       <img 
      //         src={trackImg} 
      //         className = "track-img" 
      //         alt="track"

      //       />
      //     </div>
      //     <p className = "track-text">
      //       {/* {track.name} */}
      //     </p>
          
      //     </div>
          

      //     ); 
      //   } ) 

      //   }

      // </div>
      <div>
        
      </div>
    )
  }
}

export default Gallery;

