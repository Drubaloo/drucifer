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
            <strong>Name:</strong> <p>{props.name}</p>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>

        <a href={props.href} target="_blank" rel="noreferrer"><button>{props.name}</button></a>
      </figcaption>

    </figure>
  );
}

export default ProjectCard;
