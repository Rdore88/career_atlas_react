import React, { Component } from 'react';
import JobForm from '../jobForm/JobForm';
import Map from '../map/Map';
import './Home.css'

class Home extends Component {
  state = {show: true}

  handleClose = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
}

export default Home;
