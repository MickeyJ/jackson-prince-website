import React, { Component } from 'react'
import DefaultLayout from './layout/layout'

export default class Error extends Component{
  render(){
    if(this.props.error.status){
      return(
        <DefaultLayout>
          <section>

            <h2>{this.props.message}</h2>
            <h3>{this.props.error.status}</h3>
            <pre>{this.props.error.stack}</pre>

          </section>
        </DefaultLayout>
      )
    } else {
      return(
        <DefaultLayout>
          <section>

            <h2>{this.props.message}</h2>

          </section>
        </DefaultLayout>
      )
    }
  }
}