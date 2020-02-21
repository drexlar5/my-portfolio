import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact me</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s work on amazing and<br></br>
                <span className='amazing-color'>world changing projects together</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="https://drexlar.com.ng/profile">Michael Agboola</a> Copyright &copy; 2020</span>
        </div>);
    }
}
 
export default Contact;