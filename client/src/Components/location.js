import React, { useState } from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const GOOGLE_MAP_KEY = "AIzaSyCx5H0EDQpmccKnYt_cZt3Qifvy0n3yD6I";


function Map(props) {
  const [Location, setLocation] = useState([{lat: 30.267153, lng: -97.7430608}]);

  const updateLocation = (coord) => {
      console.log('coord ' + coord)
    setLocation([JSON.parse(coord)])
    console.log(Location)
  };


  return (
  <GoogleMap
    defaultZoom={10}
    // defaults to Austin location
    defaultCenter={{ lat: 30.267153, lng: -97.7430608 }}>

    <Marker position={Location[0]}
            draggable={true}
            onDragEnd={(t) => {
                updateLocation(JSON.stringify(t.latLng))
                localStorage.setItem('myLocation', JSON.stringify(t.latLng))}}/>
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className="Gmap" style={{ width: "100%", height: "300px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?&key=${
          GOOGLE_MAP_KEY }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}