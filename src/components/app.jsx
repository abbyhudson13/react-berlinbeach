import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import beaches from '../../data/beaches';
import BeachList from './beach_list';
import Marker from './marker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeach: beaches[0],
      beaches
    };
  }

  center() {
    return {
      lat: this.state.selectedBeach.lat,
      lng: this.state.selectedBeach.lng
    };
  }

  selectBeach = (index) => {
    this.setState({ selectedBeach: beaches[index] });
  }

  render() {
    return (
      <div>
      <BeachList
        flats={this.state.flats}
        selectedFlat={this.state.selectedFlat}
        selectFlat={this.selectFlat}
      />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedBeach.lat} lng={this.state.selectedBeach.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
