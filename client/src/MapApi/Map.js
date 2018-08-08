import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//import Assets from "../pages/Assets";
//import AssetCard from "../components/AssetCard";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCyc6pOk2K_WAqYhN3DoeOir-R36LgcQ0w",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 37.8716, lng: -122.2727 }}
  >
  {props.children}
  </GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }


  componentDidMount() {
  
  }
  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  //   // this.delayedShowMarker()
  // }

  handleClick = () => {

  }

  render() {
    return (
      <MyMapComponent
        {...this.props}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      >
      <Marker
        position={{ lat:Number(this.props.latitude), lng:Number(this.props.longitude) }}
        onClick={this.handleClick} />
      </MyMapComponent>
    )
  }
}