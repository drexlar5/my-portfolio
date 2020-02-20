import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Work extends Component {
    state = {  }
    render() { 
        return ( 
        <Fade bottom>
        <div className='project'>
            <h1>{this.props.title}</h1>
            <span>{this.props.service} • {this.props.date} <br/></span>
            <span className='work-description'>{this.props.workDescription.map(line => <p key={line}>{line}</p> )}</span>

        </div> 
            </Fade>);
    }
}
 
export default Work;