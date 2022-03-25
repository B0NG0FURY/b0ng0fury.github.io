import React, { Component } from 'react';
import projects from '../projects';
import Project from './Project';

class Portfolio extends Component {
    render() {
        return (
            <section className="jt-section">
                {projects.map(project => <Project project={project} key={project.name} />)}
            </section>
        )
    }
}

export default Portfolio;