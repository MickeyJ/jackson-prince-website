import React, { Component } from 'react'
import AudioPlayer from '../../components/AudioPlayer'

import UploadFileForm from '../../components/UploadFileForm'

const S3 = 'https://s3-us-west-1.amazonaws.com';

const Artist = props =>{
  
  if(props.client.artist_name){
    return(
      <div className="container artist">
        <button
          onClick={() => props.removeClient(props.client.client_id)}
          className="btn btn-danger">Delete</button>

        <h3>{props.client.artist_name}</h3>
        <p>{props.client.description}</p>

        <UploadFileForm 
          getClientProfile={props.getClientProfile} 
          client={props.client}
        />

        {props.client.audio.map((x, i) =>(
          <AudioPlayer
            key={i}
            date={x.date}
            trackName={x.title}
            id={x.audio_id}
            removeAudio={props.removeAudio.bind(this)}
            audio={`${S3}/jp-client-bucket/${props.client.bucket_dir}/audio/${x.filename}`}
          />
        ))}

      </div>
    )
  } else {
    return(
      <div className="container artist">

        <h4>Select Artist</h4>

      </div>
    )
  }
};

export default Artist