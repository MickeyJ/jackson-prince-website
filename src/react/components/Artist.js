import React, { Component } from 'react'

import PlayerDefault from './PlayerDefault'
import UploadFileForm from './UploadFileForm'
import Button from './../materials/Button'

const S3 = 'https://jp-web-demo.s3-us-west-2.amazonaws.com';

const Artist = props =>{
  if(props.client.artist_name){
    return(
      <div className="container artist">

        <Button
          text='Delete'
          className="btn btn-danger delete-artist"
          onClick={() => props.removeClient(props.client.client_id)}
        />

        <h3>{props.client.artist_name}</h3>
        <p>{props.client.description}</p>

        <UploadFileForm 
          getClientProfile={props.getClientProfile} 
          client={props.client}
        />

        {props.client.audio.map((x, i) =>(
          <PlayerDefault
            key={i}
            date={x.date}
            trackName={x.title}
            id={x.audio_id}
            removeAudio={props.removeAudio.bind(this)}
            audio={`${S3}/${props.client.bucket_dir}/audio/${x.filename}`}
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