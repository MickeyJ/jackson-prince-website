import React, { Component } from 'react'
import { Link } from "react-router";

export default class NavLink extends Component{
  render(){
    let isActive = this.context.router.isActive(this.props.to, true),
      className = isActive ? "app-link active" : "app-link";
    return (
      <Link className={className} {...this.props}>
        {this.props.children}
      </Link>
    );
  }
}

NavLink.contextTypes = {
  router: React.PropTypes.object
};