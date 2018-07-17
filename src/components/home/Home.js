import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import Map from '../map/Map';
import './Home.css'

class Home extends Component {
  state = {
    show: true,
    jobTitle: '',
    jobType: '',
    distance: '',
    location: '',
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(event.target);
    this.setState({ show: false })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <JobForm handleSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange}/>
        <Map />
      </div>
    )
  }
}

export default Home;
