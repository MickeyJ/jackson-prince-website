import React, { Component } from 'react'
import DefaultLayout from './layout/layout'

import ProjectItem from './components/ProjectItem'

export default class Projects extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>
        
        <ProjectItem proj_name="Project One" img_url="images/banner1.jpg"/>

      </DefaultLayout>
    )
  }
}