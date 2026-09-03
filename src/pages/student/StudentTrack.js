import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import {
  ref,
  set,
  onValue
} from "firebase/database";

import { database }
from "../../firebase/config";


function StudentTrack() {

  // BUS POSITION

  const [busPosition, setBusPosition] =
    useState(0);

  // LIVE LOCATION

  const [liveLocation, setLiveLocation] =
    useState(null);

  // STOP SELECT

  const [selectedStop, setSelectedStop] =
    useState("");

  // DISTANCE + ETA

  const [distance, setDistance] =
    useState(0);

  const [eta, setEta] =
    useState(0);


  // STOPS

  const stops = [

    "Rajwada",

    "Palasia",

    "Bhanwarkua",

    "Vijay Nagar",

    "Dewas Naka"

  ];


  // LIVE LOCATION FROM FIREBASE

  useEffect(() => {

    const locationRef =
      ref(
        database,
        "liveBusLocation"
      );

    onValue(locationRef, (snapshot) => {

      const data =
        snapshot.val();

      if (data) {

        setLiveLocation(data);

      }

    });

  }, []);


  // BUS MOVEMENT DEMO

  useEffect(() => {

    const interval = setInterval(() => {

      setBusPosition((prev) => {

        if (prev >= stops.length - 1) {

          return 0;

        }

        return prev + 1;

      });

    }, 5000);

    return () => clearInterval(interval);

  }, [stops.length]);


  // CURRENT STOP

  const currentStopIndex =
    useMemo(() => {

      return busPosition;

    }, [busPosition]);


  // DISTANCE CALCULATION

  const calculateDistance = useCallback((stopIndex) => {

  const remainingStops =
    stops.length - stopIndex - 1;

  const distanceKm =
    remainingStops * 2;

  setDistance(distanceKm);

  const estimatedMinutes =
    distanceKm * 3;

  setEta(estimatedMinutes);

}, [stops.length]);


  // UPDATE DISTANCE

  useEffect(() => {

  calculateDistance(
    currentStopIndex
  );

}, [currentStopIndex, calculateDistance]);


  // NOTIFY DRIVER

  const handleReachedStop = () => {

    if (!selectedStop) {

      alert("Select Stop First");

      return;

    }

    const studentId =
      localStorage.getItem("studentId")
      || "student1";

    set(

      ref(
        database,
        `stopRequests/${selectedStop}/${studentId}`
      ),

      {

        student: studentId,

        time: Date.now()

      }

    );

    alert(
      "Driver Notified Successfully"
    );

  };


  return (

    <div className="min-h-screen bg-[#020b24] text-white p-5">

      {/* TITLE */}

      <h1 className="text-4xl font-bold text-center mb-8">

        Student Bus Tracking

      </h1>


      {/* LIVE STATUS */}

      <div className="bg-[#16213e] p-5 rounded-2xl mb-6">

        <h2 className="text-2xl font-bold mb-3">

          Live Bus Status

        </h2>

        <p className="mb-2">

          Current Stop:
          {" "}

          <span className="text-green-400 font-bold">

            {stops[currentStopIndex]}

          </span>

        </p>

        <p className="mb-2">

          Estimated Arrival:
          {" "}

          <span className="text-blue-400 font-bold">

            {eta} Minutes

          </span>

        </p>

        <p className="mb-2">

          Distance From Bus:
          {" "}

          <span className="text-yellow-400 font-bold">

            {distance} KM

          </span>

        </p>

        <p className="mb-2">

          Bus Number:
          {" "}

          <span className="font-bold">

            MP09-AB-1234

          </span>

        </p>

        {

          liveLocation && (

            <>

              <p className="mb-2">

                Latitude:
                {" "}

                <span className="text-green-400">

                  {liveLocation.latitude}

                </span>

              </p>

              <p>

                Longitude:
                {" "}

                <span className="text-green-400">

                  {liveLocation.longitude}

                </span>

              </p>

            </>

          )

        }

      </div>


      {/* NOTIFY DRIVER */}

      <div className="bg-[#16213e] p-5 rounded-2xl mb-6">

        <h2 className="text-2xl font-bold mb-4">

          Notify Driver

        </h2>

        <select
          value={selectedStop}
          onChange={(e) =>
            setSelectedStop(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-[#24304d] text-white mb-4"
        >

          <option value="">

            Select Your Stop

          </option>

          {stops.map((stop, index) => (

            <option
              key={index}
              value={stop}
            >

              {stop}

            </option>

          ))}

        </select>

        <button
          onClick={handleReachedStop}
          className="w-full bg-green-500 p-4 rounded-xl font-bold"
        >

          Reached Stop

        </button>

      </div>


      {/* LIVE MAP */}

      <div className="bg-[#16213e] p-5 rounded-2xl mb-6">

        <h2 className="text-2xl font-bold mb-5">

          Live Bus Map

        </h2>

        {

          liveLocation && (

            <MapContainer
              center={[
                liveLocation.latitude,
                liveLocation.longitude
              ]}
              zoom={13}
              style={{
                height: "400px",
                width: "100%"
              }}
            >

              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={[
                  liveLocation.latitude,
                  liveLocation.longitude
                ]}
              >

                <Popup>

                  Live Bus Location

                </Popup>

              </Marker>

            </MapContainer>

          )

        }

      </div>


      {/* STOPS */}

      <div className="bg-[#16213e] p-5 rounded-2xl">

        <h2 className="text-2xl font-bold mb-5">

          Bus Stops

        </h2>

        {stops.map((stop, index) => {

          let color = "bg-blue-500";

          // PASSED STOP

          if (index < currentStopIndex) {

            color = "bg-red-500";

          }

          // CURRENT STOP

          else if (
            index === currentStopIndex
          ) {

            color = "bg-green-500";

          }

          return (

            <div
              key={index}
              className="flex items-center mb-5"
            >

              {/* PIN */}

              <div
                className={`w-5 h-5 rounded-full ${color} mr-4`}
              ></div>

              {/* STOP NAME */}

              <div>

                <p className="text-lg font-semibold">

                  {stop}

                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>

  );

}

export default StudentTrack;
