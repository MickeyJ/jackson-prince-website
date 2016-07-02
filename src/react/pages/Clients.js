import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getClientProfile } from '../redux/actions'

export default class Clients extends Component{
  getClientProfile(id){
    return this.props.getClientProfile(id).then(res =>{
    })
  }
  render(){
    return(
      <div className="inner-layout">

        <h3>Clients</h3>
        
        <section id="artist-menu">
          {this.props.clients.map((x, i) =>(
            <div
              key={i}
              className="artist-menu-link"
              onClick={() => this.getClientProfile(x.client_id)}>
              {x.artist_name}
              <span className="arrow">&#10148;</span>
            </div>
          ))}
        </section>

        {React.cloneElement(this.props.children, {
          client: this.props.client,
          getClientProfile: this.props.getClientProfile
        })}

      </div>
    )
  }
}

Clients.contextTypes = {
  router: PropTypes.object
};

Clients.propTypes = {
  clients: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    client: state.admin.client,
    clients: state.admin.clients,
  }
}

export default connect(mapStateToProps,{
  getClientProfile
})(Clients);
