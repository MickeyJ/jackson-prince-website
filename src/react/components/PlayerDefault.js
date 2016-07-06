import React, { Component } from 'react'

import ReactAudioPlayer from 'react-audio-player'

class PlayerDefault extends Component {
  getAudioPlayer(ref){
    this.audio = ref;
  }
  componentDidMount(){
    console.log(this.audio.currentSrc);
  }
  render(){
    return(
      <div className="audio-player">
        
        <header className="audio-header">
          <h4>{this.props.trackName}</h4>
          <span className='thin-text'> - {this.props.date}</span>
          <span
            className="delete-audio"
            onClick={() => this.props.removeAudio(this.props.id)}>
            &#10060;
          </span>
        </header>

        <ReactAudioPlayer src={this.props.audio} />

      </div> 
    )
  }
}
export default PlayerDefault
