import React, { Component } from 'react';
import IndeedImage from '../../images/indeed-logo.gif';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p id='indeed_at'>
                    <a title='Job Search' href='https://www.indeed.com' rel='nofollow'>jobs by
                        <img alt="Indeed" src={IndeedImage} />
                    </a>
                </p>
                <p className='issues-comments'>
                    <a href='https://github.com/Rdore88/career_atlas_react/issues'> Front End Issues
                    </a>
                </p>
                <p className='issues-comments'>
                    <a href='https://github.com/Rdore88/BE_career_atlas/issues'> Backend Issues Issues
                    </a>
                </p>
            </div>   
        )
    }
}

export default Footer;