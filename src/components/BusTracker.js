import { useEffect, useState } from "react";

import L from "leaflet";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import { ref, set } from "firebase/database";

import { database } from "../firebase/config";


// RED MARKER ICON

const busIcon = new L.Icon({

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41]

});


function BusTracker() {
    const userId = Date.now();

  const [position, setPosition] = useState(null);


  useEffect(() => {

    navigator.geolocation.watchPosition(

      (pos) => {

        const newPosition = [
          pos.coords.latitude,
          pos.coords.longitude
        ];

        setPosition(newPosition);

        // FIREBASE UPDATE

        set(ref(database, `users/${userId}`), {

          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          name: "Student User"

        });

      },

      (err) => {

        console.log(err);

      },

      {
        enableHighAccuracy: true
      }

    );

  }, [userId]);


  if (!position) {

    return <h2>Getting Bus Location...</h2>;

  }


  return (

    <div>

      <h1>Bus GPS Running</h1>

      <MapContainer
        center={position}
        zoom={17}
        style={{
          height: "500px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={position}
          icon={busIcon}
        >

          <Popup>
            Bus Live Location
          </Popup>

        </Marker>

      </MapContainer>

    </div>

  );
}

export default BusTracker;