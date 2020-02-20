import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <span>{data.abouttext.map(line => <p key={line}>{line}</p>)}</span>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about image'></img> : null}
            

        </div>  );
    }
}
 
export default About;