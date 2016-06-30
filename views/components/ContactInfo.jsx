import React from 'react'

const ContactInfo = (props) =>(
  <table id="contact-table" className="table">
    <tbody>
      <tr>
        <th>SoundCloud</th>
        <td>
          <a href="https://soundcloud.com" target="_blank">
            MySoundCloud...
          </a>
        </td>
      </tr>
      <tr>
        <th>LinkedIn</th>
        <td>
          <a href="https://www.linkedin.com/in/jackson-prince-4b3a637b" target="_blank">
            linkedin.com/in/jackson-prince
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