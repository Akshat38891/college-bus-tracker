import { useEffect, useState } from "react";

import L from "leaflet";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

import { ref, set } from "firebase/database";

import { database } from "../firebase/config";


// FIX MARKER ICON

const busIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41]
});


// RECENTER MAP

function RecenterMap({ position }) {

  const map = useMap();

  useEffect(() => {

    map.setView(position);

  }, [position, map]);

  return null;
}


function MapComponent() {

  const [position, setPosition] = useState(null);

  useEffect(() => {

    navigator.geolocation.watchPosition(

      (pos) => {

        const newPosition = [
          pos.coords.latitude,
          pos.coords.longitude
        ];

        setPosition(newPosition);

        // FIREBASE UPLOAD

        set(ref(database, "busLocation"), {

          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude

        });

      },

      (err) => {

        console.log(err);

      },

      {
        enableHighAccuracy: true
      }

    );

  }, []);


  if (!position) {

    return <h2>Getting Live Location...</h2>;

  }


  return (

    <div style={{ height: "500px", width: "100%" }}>

      <MapContainer
        center={position}
        zoom={17}
        style={{
          height: "100%",
          width: "100%"
        }}
      >

        <RecenterMap position={position} />

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position}
          icon={busIcon}
        >

          <Popup>
            Live Bus Location
          </Popup>

        </Marker>

      </MapContainer>

    </div>

  );
}

export default MapComponent;