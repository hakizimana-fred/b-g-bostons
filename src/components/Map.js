import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "100%",
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 34.0489,
          lng: 111.0937,
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALUfmpujVPCLjcZVsZvSRjiDTHRpOBS6U",
})(MapContainer)
