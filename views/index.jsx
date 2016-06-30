import React, { Component } from 'react'
import DefaultLayout from './layout/layout'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'

export default class Index extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <div id="landing-banner-2"></div>
        <div id="landing-banner-1"></div>

        <section className="dummy first">
          
          <span>I'm Jackson.</span>
  
        </section>

        <section className="dummy hiZ-index">

          <article id="contact-box" className="container-fluid">
            
            <ContactInfo />
            
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
          </article>

        </section>
        
        <script src="js/parallax.js"></script>
      </DefaultLayout>
    )
  }
}