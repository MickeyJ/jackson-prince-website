import React, { Component } from 'react'

import Head from './head'

const siteName = "Jackson Prince";

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <Head
          siteName={siteName}
          title={this.props.title}
          description={this.props.description}
        />
        <body>
        <div id="all-wrap">

          <header>
            <h1>{siteName}</h1>
          </header>

          <main id="main-content" >
            {this.props.children}
          </main>

        </div>
        </body>
      </html>
    )
  }
}