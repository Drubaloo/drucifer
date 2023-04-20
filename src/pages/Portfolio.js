import React, { useState } from "react"
import projectList from "./assets/projects.json"
import ProjectCard from '../components/ProjectCard/ProjectCard';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function Portfolio() {
    const [projectState, setProjects] = useState(projectList)


    //filter through projects for specific technologies
    function findProject(tag) {

        //filter through JSON to get a clean run each time
        const projects = projectList.filter(data => {
            for (let i = 0; i < data.tags.length; i++) {
                if (data.tags[i] === tag) {
                    return true
                }
            } return setProjects(projectList)
        });


        //set state to new array, to be fed into child components
        setProjects(projects);

    };

    const stylesheet = {
        parent: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "5dvh",
            width: "100dvw",
            marginTop: "9%"
        },
        buttonList: {
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
            // border: "2px solid blue"
        },
        projectList: {
            width: "50%",
            height: "73dvh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            scrollbarWidth: "thick",
            scrollbarColor: "#7262D4 #35BD8B", // for Firefox only
            "&::-webkit-scrollbar": {
                width: "8px",
                backgroundColor: "#7262D4",
            },
            "&::-webkit-scrollbar-thumb": {
                borderRadius: "8px",
                backgroundColor: "#35BD8B",
            },
            // border: "2px solid blue"
        },
        title: {
            border: "2px solid black",
            borderRadius: "25px",
            padding: "2%",
            backgroundColor: "#35BD8B",
            // width: "25%"
        },
        button: {
            backgroundColor: "#C9288F",
            color: "white",
            border: "2px #7262D4 solid",
            borderRadius: "25px",
            padding: "3% 5% 3% 5%",
            width: "25%"
        },
        cardList: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
    }


    return (
        <section style={stylesheet.parent}>
            <div style={stylesheet.buttonList}>
                <h1 style={stylesheet.title}>Stack List</h1>
                <button style={stylesheet.button} onClick={() => { findProject("HTML") }}>HTML</button>
                <button style={stylesheet.button} onClick={() => { findProject("CSS") }}>CSS</button>
                <button style={stylesheet.button} onClick={() => { findProject("JS") }}>JavaScript</button>
                <button style={stylesheet.button} onClick={() => { findProject("API") }}>API</button>
                <button style={stylesheet.button} onClick={() => { findProject("MYSQL") }}>SQL</button>
            </div>
            <PerfectScrollbar style={stylesheet.projectList}>
                <h1 style={stylesheet.title}>Projects</h1>
                <div style={stylesheet.cardList}>
                    {projectState.map(project => (
                        <ProjectCard

                            id={project.id}
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            href={project.href}

                        />

                    ))}
                </div>
            </PerfectScrollbar>
        </section>
    )
}