import React, { Component, PropTypes } from 'react'

import Button from '../materials/Button'

/** @namespace this */
export default class UploadFileForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      output: '',
      amountLoaded: 0
    };
  }
  getTitle(ref){
    this.title = ref
  }
  getDate(ref){
    this.date = ref
  }
  getFile(ref){
    this.file = ref
  }
  getProgress(ref){
    this.progress = ref
  }
  setOutput(message){
    this.setState({ output: message });
  }
  progressBar(amountLoaded){
    this.setOutput(amountLoaded +'%');
    this.progress.value = amountLoaded;
    amountLoaded ++;

    console.log(amountLoaded);

    var sim = setTimeout(this.progressBar(amountLoaded), 300);

    this.setState({
      amountLoaded:  amountLoaded
    });

    if(amountLoaded == 100){
      this.setOutput('100%');
      this.progress.value = 100;
      clearTimeout(sim)
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let al = 0;
    let title = this.title.value;
    let date = this.date.value;
    let file = this.file.value;
    let client_id = this.props.client.client_id;
    let bucket = this.props.client.bucket_dir;

    if(!title || !date || !file){
      return this.setOutput("Fill'em All Out")
    }

    this.setOutput(this.state.amountLoaded +'%');


    // const sim = setInterval(() =>{
    //   al++;
    //   this.setState({
    //     output: al +'%',
    //     amountLoaded:  al
    //   });
    //
    //   if(al == 100){
    //     clearInterval(sim)
    //   }
    // }, 300);


    const form = new FormData(e.target);

    form.append('client_id', client_id);
    form.append('title', title);
    form.append('date', date);



    $.ajax({
      url: "/api/files/upload_audio/"+ bucket,
      type: "POST",
      data: form,
      xhr: ()=> {
        var myXhr = $.ajaxSettings.xhr();
        console.log(myXhr);
        if(myXhr.upload){
          myXhr.upload.addEventListener('progress',(e) =>{
            let percent = (e.loaded / e.total) * 100;
            this.setOutput(Math.round(percent) +'% - waiting...');
            this.setState({
              amountLoaded:  Math.round(percent)
            });
            console.log(Math.round(percent));
          }, false);
        }
        return myXhr;
      },
      processData: false,
      contentType: false

    }).success(res =>{
      this.setOutput('');
      this.title.value = null;
      this.file.value = null;
      return this.props.getClientProfile(client_id)

    }).error((jqXHR, status, error) =>{
      this.setOutput('Error');
      console.log(status);
      console.error(error);
    })
  }
  render(){
    const dateNow = new Date();
    const month = dateNow.getUTCMonth() + 1;
    const day = dateNow.getUTCDate();
    const year = dateNow.getUTCFullYear();
    return(
      <div className="audio-upload-form row">

        <form enctype="multipart/form-data" className="form col-sm-6" onSubmit={this.handleSubmit.bind(this)}>
          <h4>Upload an Mp3</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Track Title"
            ref={(ref) => this.getTitle(ref)}
          />
          <input
            type="text"
            className="form-control"
            defaultValue={`${month}/${day}/${year}`}
            ref={(ref) => this.getDate(ref)}
          />
          <input
            id="file"
            name="file"
            type="file"
            className="form-control"
            ref={(ref) => this.getFile(ref)}
          />
          <Button className="btn btn-success" type="submit" text="Upload"/>

          <progress
            id="progressBar"
            value={this.state.amountLoaded}
            max="100"
            style={{width: 200, height: 30}}
            ref={(ref) => this.getProgress(ref)}
          />


          <span className="submit-message">{this.state.output}</span>
        </form>


      </div>
    )
  }
}

UploadFileForm.propTypes = {
  client: PropTypes.object.isRequired
};