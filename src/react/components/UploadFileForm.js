import React, { Component, PropTypes } from 'react'

import Button from '../materials/Button'

/** @namespace this */
export default class UploadFileForm extends Component{
  constructor(props){
    super(props);
    this.state = { output: '' };
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
  setOutput(message){
    this.setState({ output: message });
  }
  handleSubmit(e){
    e.preventDefault();

    let title = this.title.value;
    let date = this.date.value;
    let file = this.file.value;
    let client_id = this.props.client.client_id;
    let bucket = this.props.client.bucket_dir;

    if(!title || !date || !file){
      return this.setOutput("Fill'em All Out")
    }

    const form = new FormData(e.target);

    form.append('client_id', client_id);
    form.append('title', title);
    form.append('date', date);

    this.setOutput('Loading...');

    $.ajax({
      url: "/api/files/upload_audio/"+ bucket,
      type: "POST",
      data: form,
      processData: false,
      contentType: false

    }).success(res =>{
      this.setOutput('');
      this.title.value = null;
      this.date.value = null;
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
      <div className="audio-upload-form">

        <h4>Upload a file</h4>

        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
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
        </form>

        <span className="submit-message">{this.state.output}</span>

      </div>
    )
  }
}

UploadFileForm.propTypes = {
  client: PropTypes.object.isRequired
};