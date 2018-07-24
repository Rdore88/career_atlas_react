import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import Map from '../map/Map';
import './Home.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function mapStateToProps(state){
  const { jobs } = state.jobs.searchedJobs;

  return {
    jobs,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
