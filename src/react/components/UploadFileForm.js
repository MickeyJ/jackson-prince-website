import React, { Component } from 'react'
import $ from 'jquery'

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
  clearOutput(){
    setTimeout(() =>{
      this.setState({ output: '' });
    }, 1000)
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
      this.setOutput('Success');
      this.title.value = null;
      this.date.value = null;
      this.file.value = null;
      this.clearOutput();
      return this.props.getClientProfile(client_id)

    }).error((jqXHR, status, error) =>{
      this.setOutput('Error');
      console.log(status);
      console.error(error);
    })
  }
  render(){
    return(
      <div>

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
            placeholder="Date"
            ref={(ref) => this.getDate(ref)}
          />
          <input
            id="file"
            name="file"
            type="file"
            className="form-control"
            ref={(ref) => this.getFile(ref)}
          />
          <button className="btn btn-success" type="submit">Upload</button>
        </form>

        <span className="submit-message">{this.state.output}</span>

      </div>
    )
  }
}