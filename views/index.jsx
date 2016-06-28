import React, { Component } from 'react'
import DefaultLayout from './layout/layout'


export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div className="container-fluid">
          <span>... The OFFICIAL Website</span>
          
        </div>

        <br/>

        <button id="balls-btn" className="btn btn-info">
          Balls
        </button>

        

      </DefaultLayout>
    )
  }
}