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


    return (
        <section className="displayBody">
            <div className="buttonList">
                <h1 className="title">Stack List</h1>
                <button className="button" onClick={() => { findProject("HTML") }}>HTML</button>
                <button className="button" onClick={() => { findProject("CSS") }}>CSS</button>
                <button className="button" onClick={() => { findProject("JS") }}>JavaScript</button>
                <button className="button" onClick={() => { findProject("API") }}>API</button>
                <button className="button" onClick={() => { findProject("MYSQL") }}>SQL</button>
                <button className="button" onClick={() => { findProject("MONGO") }}>MongoDB</button>
            </div>
            <PerfectScrollbar className="projectList">
                <h1 className="title">Projects</h1>
                <div className="cardList">
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