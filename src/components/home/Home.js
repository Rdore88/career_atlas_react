import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import './Home.css'
import './Map.css'
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

  componentDidMount() {
    const ATLANTA = {
      lat: 33.7490,
      lng: -84.3880
    };
    this.map = new window.google.maps.Map(this.refs.map, {
      center: ATLANTA,
      zoom: 10
    });
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

  addMarkers = () => {
    let jobs = this.props.jobs;
    let bounds = new window.google.maps.LatLngBounds;

    jobs.forEach(job => {
      var marker = new window.google.maps.Marker({
        position: {lat: job.latitude, "lng": job.longitude},
        map: this.map,
        title: job.jobTitle,
        animation: window.google.maps.Animation.DROP,
      })
      let locationOfPin = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(locationOfPin);
    })
    this.map.fitBounds(bounds);
    this.map.panToBounds(bounds);
  }

  render() {
    const mapStyle = {
      width: '100%',
      height: 700,
      padding: '1%'
    }
    if(this.props.jobs.length > 0) {
      this.addMarkers();
    }
    return (
      <div>
        <JobForm handleSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange}/>
        <div ref="map" style={mapStyle}>I should be a map!</div>
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
