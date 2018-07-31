import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class JobInfo extends Component {
    render(){
       const { job, show } = this.props.state;
       if (show) {
           return (
               <Modal show={show} onHide={this.props.handleHide} >
                   <Modal.Header closeButton>
                       <Modal.Title>{job.jobTitle}</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <h3>Company: {job.company}</h3>
                       <p>click <a target="_blank" rel="noopener noreferrer" href={job.url}>here</a> to apply</p>
                   </Modal.Body>
               </Modal>
           )
       } else {
           return null
       }

    }
}

export default JobInfo;