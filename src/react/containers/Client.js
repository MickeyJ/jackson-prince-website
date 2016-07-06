import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyClient } from '../redux/actions'

import JWT from '../helpers/jwt_helper'

import Navbar from '../layout/NavBar'
import ClientView from '../components/ClientView'

const S3 = 'https://jp-web-demo.s3-us-west-2.amazonaws.com';

class Client extends Component{
  handleLogout(){
    JWT.destroy();
    this.context.router.replace('/login');
  }
  componentWillMount(){
    if(!JWT.fetch()){
      this.context.router.replace('/login');
    } else {
      return this.props.verifyClient().then(res => {
        this.context.router.replace('/client');
      }).catch(err =>{

      })
    }
  }
  render(){
    return(
      <div >
        <br/>

        <div id="app-header">
          <Navbar
            token={JWT.fetch()}
            handleLogout={this.handleLogout.bind(this)}
            status="CLIENT"
          />
        </div>

        <ClientView client={this.props.client}/>

      </div>

    )
  }
}

Client.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    client: state.client.cred,
    error: state.client.error
  }
}

export default connect(mapStateToProps, {
  verifyClient
})(Client);
