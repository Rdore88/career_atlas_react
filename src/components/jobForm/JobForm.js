import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock } from 'react-bootstrap';
import './JobForm.css'

class JobForm extends Component {
  render() {
    let { jobTitle, jobType, distance, location } = this.props.state;
    let { handleSubmit, handleChange, show } = this.props;
    
      if (show) {
        return (
        <div className="job-form-container">
          <form onSubmit={handleSubmit} className="job-form">
            <FormGroup id="formControlsJobTitle">
              <ControlLabel>Job Title</ControlLabel>
              <FormControl required name="jobTitle" type="text" placeholder="Job Title" value={jobTitle} onChange={handleChange}/>
            </FormGroup>
            <FormGroup controlId="formControlsJobType">
              <ControlLabel>Type of Job</ControlLabel>
              <FormControl componentClass="select" name="jobType" onChange={handleChange} value={jobType}>
                <option value='Full-Time'>Full-Time</option>
                <option value='Temporary'>Temporary</option>
                <option value='Part-time'>Part-time</option>
                <option value='Internship'>Internship</option>
                <option value='Contract'>Contract</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsRadio">
              <ControlLabel>Distance</ControlLabel>
              <FormControl name="distance" componentClass="select" onChange={handleChange} value={distance} >
                <option value='25'>within 25 miles</option>
                <option value='20'>within 20 miles</option>
                <option value='15'>within 15 miles</option>
                <option value='10'>within 10 miles</option>
                <option value='5'>within 5 miles</option>                
              </FormControl>
            </FormGroup>
            <FormGroup id="formControlsLocation">
              <ControlLabel>Location</ControlLabel>
              <FormControl required name="location" type="text" placeholder="Atlanta, GA or 30308" value={location} onChange={handleChange} />
              <HelpBlock>Please use "city, state" or a postal code</HelpBlock>
            </FormGroup>
            <Button type="submit">Find Jobs</Button>
          </form>
        </div>
        )
      } else {
        return null;
      }

  }
}

export default JobForm;
