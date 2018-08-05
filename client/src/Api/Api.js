import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
 
const ReactComponent = ({ text }) => <div>{text}</div>;

class Api extends Component {
  static defaultProps = {
    center: {
      lat: 37.8716,
      lng: -122.2727
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDXA7JcuRfsGM_zMhTqozLJiFRiiogWh44"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <ReactComponent
            lat={37.8716}
            lng={-122.2727}
            text={'Berkeley, California'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Api;