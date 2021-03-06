import React, { Component } from 'react'

import Head from '../components/Head'
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'

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

            <NavHeader siteName={siteName}/>

            <main id="main-content" >
              {this.props.children}
            </main>

            <Footer siteName={siteName}/>

          </div>
          <script src="js/scroll.js"></script>
        </body>
      </html>
    )
  }
}