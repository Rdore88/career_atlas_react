import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class JobInfo extends Component {
    render(){
       const { job, show } = this.props.state;
       if (show) {
           return (
               <Modal show={show} onHide={this.props.handleHide} >
                   <Modal.Header closeButton>
                       <Modal.Title>Company: {job.company}</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <p>Job Title: {job.positionTitle}</p>
                       <p>{job.snippet}</p>
                   </Modal.Body>
                   <Modal.Footer>
                       <p>Apply now <a target="_blank" rel="noopener noreferrer" href={job.url}>here</a>!</p>
                   </Modal.Footer>
               </Modal>
           )
       } else {
           return null
       }

    }
}

export default JobInfo;
