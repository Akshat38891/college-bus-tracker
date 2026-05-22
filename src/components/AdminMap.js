import { useEffect, useState } from "react";

import L from "leaflet";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import { ref, onValue } from "firebase/database";

import { database } from "../firebase/config";


// MARKER ICON

const userIcon = new L.Icon({

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

  iconSize: [25, 41],
  iconAnchor: [12, 41]

});


function AdminMap() {

  const [users, setUsers] = useState([]);


  useEffect(() => {

    const usersRef = ref(database, "users");

    onValue(usersRef, (snapshot) => {

      const data = snapshot.val();

      if (data) {

        const usersArray = Object.values(data);

        setUsers(usersArray);

      }

    });

  }, []);


  return (

    <div>

      <h1>Admin Live Tracking</h1>

      <MapContainer
        center={[22.7196, 75.8577]}
        zoom={13}
        style={{
          height: "500px",
          width: "100%"
        }}
      >

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {users.map((user, index) => (

          <Marker
            key={index}
            position={[
              user.latitude,
              user.longitude
            ]}
            icon={userIcon}
          >

            <Popup>
              {user.name}
            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );
}

export default AdminMap;