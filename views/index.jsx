import React, { Component } from 'react'
import DefaultLayout from './layout/layout'


export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div className="row-fluid">
          <span>Hello</span>
        </div>
        
      </DefaultLayout>
    )
  }
}