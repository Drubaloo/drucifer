import React from "react";

function ProjectCard(props) {

  const styleSheet = {
    card: {
      backgroundColor: "#fca80e",
      width: "75%",
      padding: "4% 1% 4% 1%",
      border: "2px solid black",
      borderRadius: "25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    },
    imageStyle: {
      width: "75%"
    },
    button: {
      backgroundColor: "#C9288F",
      color: "white",
      border: "2px #7262D4 solid",
      borderRadius: "25px",
      padding: "3% 5% 3% 5%",
      width: "25%"
    },
    content: {
      listStyleType: "none"
    }
  }


  return (
    <figure style={styleSheet.card}>
      <div>
        <img style={styleSheet.imageStyle} alt={props.name} src={props.image} />
      </div>
      <figcaption>
        <ul style={styleSheet.content}>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>

        <a href={props.href} target="_blank" rel="noreferrer"><button style={styleSheet.button}>{props.name}</button></a>
      </figcaption>

    </figure>
  );
}

export default ProjectCard;
