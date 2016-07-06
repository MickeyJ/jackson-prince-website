import React, { Component } from 'react'
import { connect } from 'react-redux'
import JWT from '../helpers/jwt_helper'

export default class Layout extends Component{
  componentWillMount(){
    if(!JWT.fetch()){
      return this.context.router.replace('/login');
    } else {
      return this.context.router.replace('/admin/clients');
    }
  }
  render(){
    return(
      <div >
        
        {this.props.children}
        
      </div>
    )
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    admin: state.admin.cred,
    client: state.client.cred
  }
}

export default connect(mapStateToProps)(Layout);