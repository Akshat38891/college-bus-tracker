import React, {
  useEffect,
  useState
} from "react";

import {
  ref,
  set,
  onValue
} from "firebase/database";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { database }
from "../../firebase/config";


function BusLive() {

  // LOCATION

  const [location, setLocation] =
    useState(null);

  // REQUESTS

  const [requests, setRequests] =
    useState({});


  // GET GPS LOCATION

  useEffect(() => {

    // FORCE LOCATION

    navigator.geolocation.getCurrentPosition(

      async (position) => {

        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        // SAVE TO FIREBASE

        await set(

          ref(
            database,
            "liveBusLocation"
          ),

          {

            latitude,

            longitude,

            updatedAt:
              Date.now()

          }

        );

        setLocation({

          latitude,

          longitude

        });

      },

      (error) => {

        console.log(error);

        alert(
          "Please Allow Location Permission"
        );

      },

      {

        enableHighAccuracy: true

      }

    );

  }, []);


  // GET STUDENT REQUESTS

  useEffect(() => {

    const requestRef =
      ref(
        database,
        "stopRequests"
      );

    onValue(requestRef, (snapshot) => {

      const data =
        snapshot.val();

      if (data) {

        setRequests(data);

      }

      else {

        setRequests({});

      }

    });

  }, []);


  return (

    <div className="min-h-screen bg-[#020b24] text-white p-5">

      {/* TITLE */}

      <h1 className="text-4xl font-bold text-center mb-8">

        Driver Live Tracking

      </h1>


      {/* LOCATION */}

      <div className="bg-[#16213e] p-5 rounded-2xl mb-6">

        <h2 className="text-2xl font-bold mb-5">

          Live Bus Location

        </h2>

        {

          location

          ? (

            <>

              <p className="mb-4 text-xl">

                Latitude:
                {" "}

                {location.latitude}

              </p>

              <p className="text-xl">

                Longitude:
                {" "}

                {location.longitude}

              </p>

            </>

          )

          : (

            <p>

              Getting Live Location...

            </p>

          )

        }

      </div>


      {/* MAP */}

      {

        location && (

          <div className="bg-[#16213e] p-5 rounded-2xl mb-6">

            <h2 className="text-2xl font-bold mb-5">

              Driver Live Map

            </h2>

            <MapContainer
              center={[
                location.latitude,
                location.longitude
              ]}
              zoom={15}
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "20px"
              }}
            >

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[
                  location.latitude,
                  location.longitude
                ]}
              >

                <Popup>

                  Your Bus Location

                </Popup>

              </Marker>

            </MapContainer>

          </div>

        )

      }


      {/* STUDENTS */}

      <div className="bg-[#16213e] p-5 rounded-2xl">

        <h2 className="text-2xl font-bold mb-5">

          Upcoming Students

        </h2>

        {

          Object.keys(requests).length > 0

          ? (

            Object.entries(requests).map(

              ([stopName, students]) => (

                <div
                  key={stopName}
                  className="bg-[#24304d] p-4 rounded-xl mb-4"
                >

                  <h3 className="text-xl font-bold text-green-400">

                    {stopName}

                  </h3>

                  <p className="mt-2 text-lg">

                    Waiting Students:
                    {" "}

                    {

                      Object.keys(students).length

                    }

                  </p>

                </div>

              )

            )

          )

          : (

            <p>

              No Student Requests Yet

            </p>

          )

        }

      </div>

    </div>

  );

}

export default BusLive;