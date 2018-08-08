import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

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
    {props.isMarkerShown && <Marker position={{ lat: 37.8716, lng: -122.2727 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 37.8044, lng: -122.2711 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: 37.7749, lng: -122.4194 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }


  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}