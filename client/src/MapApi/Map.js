import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
 
const ReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
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
          bootstrapURLKeys={{ key: ""}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
     
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
 
export default Map;