import React, { useState, useEffect } from "react";
import {
  GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as lostDogs from "../../Data/lostdogs.json"
// import dgicon from "../Content/mapdog.svg";
const GOOGLE_MAP_KEY = "AIzaSyCx5H0EDQpmccKnYt_cZt3Qifvy0n3yD6I";


function Map() {
  const [selectedDog, setselectedDog] = useState(null);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/lostDogs");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData(data);
  }, []);

  const imgStyle = {
    height: '160px',
  }

  return (
  <GoogleMap
    defaultZoom={10}
    // defaults to Austin location
    defaultCenter={{ lat: 30.267153, lng: -97.7430608 }}
  >
      {data.map(dog => (
        
        <Marker 
          key={dog.location} 
          position={{
            lat: +(dog.location.lat),
            lng: +(dog.location.lng)
        }}
        onClick={() => {
          setselectedDog(dog);
        }}


        />
        ))}

         {selectedDog && (
          <InfoWindow 
            position={{
              lat: selectedDog.location.lat,
              lng: selectedDog.location.lng,
            }}
            onCloseClick={() => {
              setselectedDog(null);
            }}
           >
          <div>
            <h4>Breed: {selectedDog.dogBreed}</h4>
            <p>Size: {selectedDog.dogSize}</p>
            <img src={selectedDog.img} style={imgStyle}></img>
          </div>
        </InfoWindow>
            )}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div className="Gmap" style={{ width: "100%", height: "450px" }}>
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
