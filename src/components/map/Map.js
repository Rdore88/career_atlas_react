import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    const EIFFEL_TOWER_POSITION = {
      lat: 48.858608,
      lng: 2.294471
    };
    this.map = new window.google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }

  render(){
    const mapStyle = {
      width: 500,
      height: 300,
      border: '1px solid black'
    };
    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default GoogleMap
