import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createNewClient } from '../redux/actions'

export default class NewClient extends Component{
  constructor(){
    super();
    this.state = { output: '' }
  }
  getArtistNameValue(ref){
    this.artistName = ref;
  }
  getEmailValue(ref){
    this.email = ref;
  }
  getPasswordValue(ref){
    this.password = ref;
  }
  getDescriptionValue(ref){
    this.description = ref;
  }
  handleSubmit(e){
    e.preventDefault();
    let artistName = this.artistName.value;
    let email = this.email.value;
    let password = this.password.value;
    let description = this.description.value;
    let bucketDir = artistName.split(' ').join('').toLowerCase();
    
    if(!bucketDir || !description || !password || !email || !artistName){
      this.setState({ output: "Fill'em All Out Yo."});
      return;
    }

    const newClient = {
      artistName,
      email,
      password,
      description,
      bucketDir
    };

    return(
      this.props.createNewClient(newClient)
        .then(res =>{
          this.context.router.replace('/clients');
        })
        .catch(err =>{
          this.setState({ output: err});
        })
    );

  }
  render(){
    return(
      <div className="jumbotron">

        <form className="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <h4>Create New Client</h4>
          <fieldset className="form-group">
            <input
              type="text"
              id="client-name"
              name="client-name"
              placeholder="Artist"
              className="form-control"
              ref={(ref) => this.getArtistNameValue(ref)}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="text"
              id="client-email"
              name="client-email"
              placeholder="Email"
              className="form-control"
              ref={(ref) => this.getEmailValue(ref)}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="password"
              id="client-password"
              name="client-password"
              placeholder="Password"
              className="form-control"
              ref={(ref) => this.getPasswordValue(ref)}
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="text"
              id="client-description"
              name="client-description"
              placeholder="Description"
              className="form-control"
              ref={(ref) => this.getDescriptionValue(ref)}
            />
          </fieldset>
          <input className="btn btn-info" type="submit" value="Login"/>
        </form>

        <span className="submit-message">{this.state.output}</span>

      </div>
    )
  }
}

NewClient.contextTypes = {
  router: React.PropTypes.object
};

const mapStateToProps = (state) =>({
  admin: state.admin.cred
});

export default connect(mapStateToProps, {
  createNewClient
})(NewClient);