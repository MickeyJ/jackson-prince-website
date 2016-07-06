import React, { Component } from 'react'

import ReactAudioPlayer from 'react-audio-player'
const S3 = 'https://jp-web-demo.s3-us-west-2.amazonaws.com';

const ClientView = props =>{
  if(props.client.artist_name){
    return(
      <div className="container">

        <h3>{props.client.artist_name}</h3>
        <p>{props.client.description}</p>

        {props.client.audio.map((x, i) =>(

          <div key={i} className="audio-player">

            <header className="audio-header">
              <h4>{x.title}</h4>
              <span className='thin-text'> - {x.date}</span>
            </header>
            
            <ReactAudioPlayer
              src={`${S3}/${props.client.bucket_dir}/audio/${x.filename}`}
            />

          </div>
        ))}

      </div>
    )
  } else {
    return(
      <div className="container">
        

      </div>
    )
  }
};

export default ClientView