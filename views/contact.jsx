import React, { Component } from 'react'
import DefaultLayout from './layout/layout'

export default class Contact extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <h1>Hit me up</h1>

        <form className="form-group">
          <input className="form-control" type="text" placeholder="Yo Name"/>
          <input className="form-control" type="email" placeholder="Yo Email"/>
          <textarea className="form-control" placeholder="Yo Message"/>
          <button className="btn btn-success">Send</button>
        </form>

      </DefaultLayout>
    )
  }
}