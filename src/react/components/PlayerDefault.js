import React, { Component } from 'react'

import ReactAudioPlayer from 'react-audio-player'

const PlayerDefault = (props) =>(
  <div className="audio-player">

    <header className="audio-header">
      <h4>{props.trackName}</h4>
      <span className='thin-text'> - {props.date}</span>
      <span
        className="delete-audio"
        onClick={() => props.removeAudio(props.id)}>
        &#10060;
      </span>
    </header>

    <ReactAudioPlayer src={props.audio} />

  </div>
);

export default PlayerDefault
