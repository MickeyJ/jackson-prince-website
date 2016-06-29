import React from 'react'

const ContactForm = (props) =>{
  return(
    <form id="contact-form">
      <h4>Send me a message!</h4>
      <fieldset className="form-group">
        <input className="form-control" type="text" name="contact-name" id="contact-name" placeholder="Name" />
        <input className="form-control" type="text" name="contact-email" id="contact-email" placeholder="Email" />
      </fieldset>
      <fieldset className="form-group">
        <textarea className="form-control" name="contact-message" id="contact-message" placeholder="Message" cols="30" rows="5" />
      </fieldset>
      <input className="btn btn-info" type="submit" value="submit"/>
    </form>
  )
};

export default ContactForm