import { useEffect } from "react";

import { ref, set } from "firebase/database";

import { database } from "../firebase/config";


function BusTracker() {

  useEffect(() => {

    navigator.geolocation.watchPosition(

      (pos) => {

        set(ref(database, "busLocation"), {

          latitude: pos.coords.latitude,

          longitude: pos.coords.longitude

        });

        console.log("Location Updated");

      },

      (err) => {

        console.log(err);

      },

      {
        enableHighAccuracy: true
      }

    );

  }, []);


  return (

    <div>

      <h1>Bus GPS Running...</h1>

      <p>
        Live location uploading to Firebase
      </p>

    </div>

  );
}

export default BusTracker;