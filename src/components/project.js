import React, { Component } from 'react';
import Childproject from './child/project'
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Project extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Projects.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Childproject key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Childproject>
                ))}
        </div>
        </div>  );
    }
}
 
export default Project;