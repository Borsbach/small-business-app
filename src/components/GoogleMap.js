import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux'
import MarkerIcon from '../images/icons8-marker-48.png'
// import state from '../redux/state' 

const MapPin = () => <img alt='marker' src={MarkerIcon}></img>;

class GoogleMap extends Component {
  static defaultProps = {
    zoom: 16
  };

  render() {
    console.log('string:', this.props)
    // const { center: { lat, lng } } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDEoy1FFQU4mZNGZ0DOyHoIG0cb6nOoCi0' }}
          defaultCenter={{ lat: this.props.coordinates[0], lng: this.props.coordinates[1]}}
          defaultZoom={this.props.zoom}
        >
          {/* <MapPin
            lat={ lat }
            lng={ lng } /> */}
          {/* <MapPin
            lat= {30.518704}
            lng= {-97.660826}
          /> */}

    {/* {this.props.listings.listings.map((listings, idx) => ( */}
          <MapPin 
            // key={listings.id}
            position={{ 
              lat: this.props.coordinates[0],
              lng: this.props.coordinates[1]
            }}/>
            
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listings: state.listings
  }
}

export default connect(mapStateToProps, null) (GoogleMap);