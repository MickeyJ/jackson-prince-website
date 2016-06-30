import React, { Component } from 'react'

import Head from '../components/Head'

const siteName = "Jackson Prince";

export default class AppLayout extends Component{
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

          <section id="nav-header">

            <header>
              <a href="/">
                <span>{siteName}</span>
              </a>
            </header>

            <nav id="nav" >
              <a className="black" href="/">Go Back</a>
            </nav>

          </section>
  
          <main id="main-content" >
            {this.props.children}
          </main>

          <footer id="footer">
            <span>&copy; 2015</span>
            <span>{siteName}</span>
          </footer>
  
        </div>
        <script src="bundle.js"></script>
      </body>
      </html>
    )
  }
}