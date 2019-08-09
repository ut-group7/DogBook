import React, { useState } from "react";
import {
  GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as lostDogs from "../../Data/lostdogs.json"
// import dgicon from "../Content/mapdog.svg";
import GOOGLE_MAP_KEY from "../../keys";


function Map() {
  const [selectedDog, setselectedDog] = useState(null);

  return (
  <GoogleMap
    defaultZoom={10}
    // defaults to Austin location
    defaultCenter={{ lat: 30.267153, lng: -97.7430608 }}
  >
      {lostDogs.features.map(dog => (
        <Marker 
          key={dog.properties.DOG_ID} 
          position={{
            lat: dog.geometry.coordinates[0],
            lng: dog.geometry.coordinates[1]
        }}
        onClick={() => {
          setselectedDog(dog);
        }}
        // icon={{
        //   url:{ dgicon },
        //   // url: "../Content/dog.svg",
        //   scaledSize: new window.google.maps.Size(25, 25)
        // }}

        />
        ))}
         {selectedDog && (
          <InfoWindow 
            position={{
              lat: selectedDog.geometry.coordinates[0],
              lng: selectedDog.geometry.coordinates[1],
            }}
            onCloseClick={() => {
              setselectedDog(null);
            }}
           >
          <div>
            <h2>{selectedDog.properties.NAME}</h2>
            <p>{selectedDog.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
            )}
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
