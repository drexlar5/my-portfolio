import React, { Component } from 'react';
import Childwork from './child/work'
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                {data.works.map((work)=>(
                    <Childwork key={work.id}
                             title = {work.title}
                             service = {work.service}
                             date = {work.date}
                             workDescription = {work.workDescription}
                             url={work.url}
                     ></Childwork>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;