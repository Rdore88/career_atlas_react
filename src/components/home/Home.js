import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import './Home.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchJobs } from '../../actions/jobActions';
import JobInfo from '../jobInfo/JobInfo';
import SearchButton from '../searchButton/SearchButton';

class Home extends Component {

  getInitialState = () => {
    return {
      jobTitle: '',
      jobType: '',
      distance: '',
      location: '',
      modal: {
        show: false,
        job: null
      },
      markers: []
    }
  }

  state = this.getInitialState();

  componentDidMount() {
    const ATLANTA = {
      lat: 33.7490,
      lng: -84.3880
    };
    this.map = new window.google.maps.Map(this.refs.map, {
      center: ATLANTA,
      zoom: 10
    });

    if(this.props.jobs.length > 0 && this.state.markers.length === 0){
      this.addMarkers();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { modal, markers, ...searchParams } = this.state;
    this.props.searchJobs(searchParams)
    .then(res => {
      // TODO: add error handling
      this.addMarkers();
    })
    .catch(err => console.log(err))
   
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handlePinClick = job => {
    this.setState({
      modal: {
        show: true,
        job,
      }
    })
    
  };

  handleHide = event => {
    this.setState({
      modal: {
        show: false,
        job: null
      }
    })
  };

  setMapOnAll = map => {
    this.state.markers.forEach(marker => {
      marker.setMap(map)
    })
  };

  handleNewSearch = () => {
    this.setMapOnAll(null);
    this.setState(this.getInitialState())
  };

  addMarkers = () => {
    let jobs = this.props.jobs;
    let bounds = new window.google.maps.LatLngBounds();
    let markers = [];
    jobs.forEach(job => {
      let marker = new window.google.maps.Marker({
        position: {lat: parseFloat(job.latitude), lng: parseFloat(job.longitude)},
        map: this.map,
        title: job.jobTitle,
        animation: window.google.maps.Animation.DROP,
      });
      let locationOfPin = new window.google.maps.LatLng(marker.position.lat(), marker.position.lng());
      bounds.extend(locationOfPin);
      marker.addListener('click', () => this.handlePinClick(job));
      markers.push(marker);
    });
    this.map.fitBounds(bounds);
    this.map.panToBounds(bounds);
    this.setState({ markers: markers })
  };

  render() {
    const mapStyle = {
      width: '99%',
      height: 700,
      padding: '1%',
      margin: 'auto',
      borderRadius: '1%' 
    }
    return (
      <div>
        <JobForm handleSubmit={this.handleSubmit} state={this.state} handleChange={this.handleChange} show={!this.state.markers.length > 0}/>
        <JobInfo state={this.state.modal} handleHide={this.handleHide}/>
        <SearchButton handleNewSearch={this.handleNewSearch} show={this.state.markers.length > 0} />
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
