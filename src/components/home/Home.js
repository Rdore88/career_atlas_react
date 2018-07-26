import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import Map from '../map/Map';
import './Home.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchJobs } from '../../actions/jobActions';

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
    const { show, ...searchParams } = this.state;
    this.props.searchJobs(searchParams);
    this.setState({ show: false })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    console.log(this.props.jobs);
    return (
      <div>
        <JobForm handleSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange}/>
        <Map />
      </div>
    )
  }
}

function mapStateToProps(state){

  return {
    jobs: state.jobs.searchedJobs,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    searchJobs,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
