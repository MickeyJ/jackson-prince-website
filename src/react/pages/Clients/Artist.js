import React, { Component } from 'react'
import AudioPlayer from '../../components/AudioPlayer'

import UploadFileForm from '../../components/UploadFileForm'

const S3 = 'http://s3-us-west-1.amazonaws.com';

const Artist = props =>{
  
  if(props.client.artist_name){
    return(
      <div className="container artist">

        <h3>{props.client.artist_name}</h3>
        <p>{props.client.description}</p>

        <UploadFileForm client={props.client}/>

        {props.client.audio.map((x, i) =>(
          <AudioPlayer
            key={i}
            trackName={x.title}
            audio={`${S3}/${props.client.bucket_dir}/audio/${x.filename}`}
          />
        ))}

      </div>
    )
  } else {
    return(
      <div className="container">

        <h4>Select Artist</h4>

      </div>
    )
  }
};

export default Artist