import React from 'react'

const ContactInfo = (props) =>(
  <table id="contact-table" className="table">
    <tbody>
      <tr>
        <th>SoundCloud</th>
        <td>
          <a href="https://soundcloud.com/">
            MySoundCloud...
          </a>
        </td>
      </tr>
      <tr>
        <th>Facebook</th>
        <td>
          <a href="https://www.facebook.com/jackson.prince" target="_blank">
            facebook.com/jackson.prince
          </a>
        </td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>
          <a href="tel:+14045740257" >
            404-574-0257
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

export default ContactInfo;