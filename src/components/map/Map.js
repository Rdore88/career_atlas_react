import React, { Component } from 'react';
import './Map.css'

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
      width: '100%',
      height: 700,
      padding: '1%'
    };
    return (
      <div ref="map" style={mapStyle}>I should be a map!</div>
    );
  }
}

export default GoogleMap
