import { useEffect, useState } from "react";

import L from "leaflet";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";

import { ref, onValue } from "firebase/database";

import { database } from "../firebase/config";


// CUSTOM MARKER

const busIcon = new L.Icon({

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

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


function StudentMap() {

  const [position, setPosition] = useState(null);


  useEffect(() => {

    const locationRef = ref(database, "busLocation");

    onValue(locationRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        setPosition([
          data.latitude,
          data.longitude
        ]);

      }

    });

  }, []);


  if (!position) {

    return <h2>Loading Bus Location...</h2>;

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
            College Bus Live Location
          </Popup>

        </Marker>

      </MapContainer>

    </div>

  );
}

export default StudentMap;