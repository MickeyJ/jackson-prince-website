import React, { Component } from 'react'
import $ from 'jquery'

export default class UploadFileForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      output: '',
      loading: false,
      loadTime: 200,
      currentTime: 0
    };
  }

  handleSubmit(e){
    e.preventDefault();

    if(e.target.file.value){
      const form = new FormData(e.target);
    
      form.append('client_id', this.props.client.client_id);
    
      $.ajax({
          url: "/api/files/upload_audio/"+ this.props.client.bucket_dir,
          type: "POST",
          data: form,
          processData: false,
          contentType: false
        })
        .success(res =>{
          this.setState({ output: 'Success' });
          console.log(res);
        })
        .error((jqXHR, status, error) =>{
          this.setState({ output: 'Error' });
          console.log(status);
          console.error(error);
        })
    
    } else this.setState({ output: 'Please Choose a File' });

  }
  render(){
    return(
      <div>

        <h4>Upload a file</h4>

        <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
          <input id="title" name="title" type="text" className="form-control" placeholder="Title" />
          <input id="date" name="date" type="text" className="form-control" placeholder="Date" />
          <input id="file" name="file" type="file" className="form-control" />
          <button className="btn btn-success" type="submit">Upload</button>
        </form>

        <span className="submit-message">{this.state.output}</span>

      </div>
    )
  }
}