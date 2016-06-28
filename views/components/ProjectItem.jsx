import React from 'react'

const ProjectItem = (props) => (
  <article className="project-item">
    <h3>{props.proj_name}</h3>

    <figure>
      <img src={props.img_url} alt="#" />
      <figcaption>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit?
      </figcaption>
    </figure>

  </article>
);

export default ProjectItem