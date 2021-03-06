import React, { Component } from 'react'
import { connect } from 'react-redux'
import { verifyAdmin } from '../redux/actions'

import JWT from '../helpers/jwt_helper'

import Navbar from './../layout/NavBar'

class Admin extends Component{
  handleLogout(){
    JWT.destroy();
    this.context.router.replace('/login');
  }
  componentWillMount(){
    if(!JWT.fetch()){
      this.context.router.replace('/login');
    } else {
      return this.props.verifyAdmin().then(res => {
        this.context.router.replace('/admin/clients');
      }).catch(err =>{
        if(err){
          this.handleLogout()
        }
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
            status="ADMIN"
          />
        </div>

        <main>
          {this.props.children}
        </main>

      </div>
    )
  }
}

Admin.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    admin: state.admin.cred,
    clients: state.admin.clients,
    error: state.admin.error
  }
}

export default connect(mapStateToProps, {
  verifyAdmin
})(Admin);
