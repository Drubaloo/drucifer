import React from "react";

function ProjectCard(props) {

  return (
    <figure className="card">
      <div>
        <img alt={props.name} src={props.image} />
      </div>
      <figcaption>
        <ul>
          <li>
          <p><strong>{props.name}</strong> </p>
          </li>
          <li>
            <strong><p>{props.description}</p></strong> 
          </li>
        </ul>

        <a href={props.href} target="_blank" rel="noreferrer"><button>{props.name}</button></a>
      </figcaption>

    </figure>
  );
}

export default ProjectCard;
