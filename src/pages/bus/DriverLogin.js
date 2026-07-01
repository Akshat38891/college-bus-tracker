import React, {
  useState
} from "react";

import {
  ref,
  get
} from "firebase/database";

import { database }
from "../../firebase/config";

import { useNavigate }
from "react-router-dom";


function DriverLogin() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  // LOGIN

  const handleLogin =
    async () => {

      if (
        !email ||
        !password
      ) {

        alert("Fill All Fields");

        return;

      }

      const driversRef =
        ref(database, "drivers");

      const snapshot =
        await get(driversRef);

      if (snapshot.exists()) {

        const drivers =
          snapshot.val();

        let found = false;

        Object.keys(drivers).forEach((key) => {

          const driver =
            drivers[key];

          if (

            driver.email === email
            &&

            driver.password === password

          ) {

            found = true;

          }

        });

        if (found) {

          alert(
            "Driver Login Success"
          );

          navigate("/bus-live");

        }

        else {

          alert(
            "Invalid Driver Details"
          );

        }

      }

      else {

        alert(
          "No Drivers Found"
        );

      }

    };


  return (

    <div className="min-h-screen bg-[#020b24] text-white flex justify-center items-center">

      <div className="bg-[#16213e] p-8 rounded-2xl w-[90%] max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">

          Driver Login

        </h1>

        <input
          type="email"
          placeholder="Driver Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <input
          type="password"
          placeholder="Driver Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 p-4 rounded-xl font-bold"
        >

          Login

        </button>

      </div>

    </div>

  );

}

export default DriverLogin;