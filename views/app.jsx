import React, { Component } from 'react'
import AppLayout from './layout/admin_layout'

export default class Index extends Component{
  render(){
    return(
      <AppLayout
        title={this.props.title}
        description={this.props.description}>

        <div id="admin-app"></div>
        
      </AppLayout>
    )
  }
}