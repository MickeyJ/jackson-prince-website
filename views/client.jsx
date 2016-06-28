import React, { Component } from 'react'
import AppLayout from './layout/app_layout'

export default class Index extends Component{
  render(){
    return(
      <AppLayout
        title={this.props.title}
        description={this.props.description}>

        <div id="react-app"></div>
        
      </AppLayout>
    )
  }
}