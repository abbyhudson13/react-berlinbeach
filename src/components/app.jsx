import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import beaches from '../../data/beaches';
import BeachList from './beach_list';
import Marker from './marker';
const GOOGLE_API_KEY= 'AIzaSyAsEtjC6xsgZForMS_x0tsE7oG_XUUZRSY';



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
        beaches={this.state.beaches}
        selectedBeach={this.state.selectedBeach}
        selectBeach={this.selectBeach}
      />
        <div className="map-container">
          <GoogleMapReact
          bootstrapURLKeys={{
            key: GOOGLE_API_KEY,
            language: 'en'
            }}
          defaultCenter={this.center()} defaultZoom={9}>
            <Marker lat={this.state.selectedBeach.lat} lng={this.state.selectedBeach.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
