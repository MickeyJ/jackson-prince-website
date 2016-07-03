import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getClientProfile, removeClient, removeAudio } from '../redux/actions'


export default class Clients extends Component{
  getClientProfile(id){
    return this.props.getClientProfile(id).then(res =>{
      this.context.router.push('/clients');
    })
  }
  removeClient(id){
    let removalPrompt = confirm('Are you sure you want to delete this client?');
    if(removalPrompt){
      this.props.removeClient(id).then(res =>{
        console.log(res);
      });
      this.context.router.replace('/clients');
    }
  }
  removeAudio(id){
    let removalPrompt = confirm('Are you sure you want to delete this track?');
    if(removalPrompt){
      this.props.removeAudio(id).then(res =>{
        console.log(res);
      });
    }
  }
  render(){
    let clientId = this.props.client.client_id;
    let activeLink = "artist-menu-link active-artist";
    let inactiveLink = "artist-menu-link";

    return(
      <div className="inner-layout">
        <section id="artist-menu">
          {this.props.clients.map((x, i) =>(
            <div
              key={i}
              className={clientId == x.client_id ? activeLink : inactiveLink}
              onClick={() => this.getClientProfile(x.client_id)}>
              <span className="artist-name">{x.artist_name}</span>
              <span className="arrow">&#10148;</span>
            </div>
          ))}
        </section>

        {React.cloneElement(this.props.children, {
          client: this.props.client,
          getClientProfile: this.props.getClientProfile,
          removeClient: this.removeClient.bind(this),
          removeAudio: this.removeAudio.bind(this)
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
  getClientProfile,
  removeClient,
  removeAudio
})(Clients);
