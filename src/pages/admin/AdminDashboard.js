import React, {
  useState,
  useEffect
} from "react";

import {
  ref,
  set,
  onValue,
  remove
} from "firebase/database";

import { database }
from "../../firebase/config";

function AdminDashboard() {

  // INPUT STATES

  const [driverName, setDriverName] =
    useState("");

  const [driverEmail, setDriverEmail] =
    useState("");

  const [driverPassword, setDriverPassword] =
    useState("");

  const [busNumber, setBusNumber] =
    useState("");


  // DRIVER ARRAY

  const [drivers, setDrivers] =
    useState([]);


  // ADD DRIVER

  const handleAddDriver = async () => {

    if (
      !driverName ||
      !driverEmail ||
      !driverPassword ||
      !busNumber
    ) {

      alert("Fill All Fields");

      return;

    }

    const driverId =
      Date.now();

    await set(

      ref(
        database,
        `drivers/${driverId}`
      ),

      {

        id: driverId,

        name: driverName,

        email: driverEmail,

        password: driverPassword,

        bus: busNumber

      }

    );

    alert(
      "Driver Added Successfully"
    );

    setDriverName("");

    setDriverEmail("");

    setDriverPassword("");

    setBusNumber("");

  };


  // FETCH DRIVERS

  useEffect(() => {

    const driversRef =
      ref(database, "drivers");

    onValue(driversRef, (snapshot) => {

      const data =
        snapshot.val();

      if (data) {

        const driversArray =
          Object.values(data);

        setDrivers(driversArray);

      }

      else {

        setDrivers([]);

      }

    });

  }, []);


  // DELETE DRIVER

  const handleDeleteDriver =
  async (id) => {

    try {

      await remove(

        ref(
          database,
          `drivers/${String(id)}`
        )

      );

      alert(
        "Driver Deleted Successfully"
      );

    }

    catch (error) {

      alert(error.message);

    }

};


  return (

    <div className="min-h-screen bg-[#020b24] text-white p-5">

      <h1 className="text-4xl font-bold text-center mb-8">

        Admin Dashboard

      </h1>


      {/* ADD DRIVER */}

      <div className="bg-[#16213e] p-5 rounded-2xl">

        <h2 className="text-2xl font-bold mb-5">

          Add Driver

        </h2>

        <input
          type="text"
          placeholder="Driver Name"
          value={driverName}
          onChange={(e) =>
            setDriverName(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <input
          type="email"
          placeholder="Driver Email"
          value={driverEmail}
          onChange={(e) =>
            setDriverEmail(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <input
          type="password"
          placeholder="Driver Password"
          value={driverPassword}
          onChange={(e) =>
            setDriverPassword(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <input
          type="text"
          placeholder="Bus Number"
          value={busNumber}
          onChange={(e) =>
            setBusNumber(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-[#24304d] mb-4"
        />

        <button
          onClick={handleAddDriver}
          className="w-full bg-green-500 p-4 rounded-xl font-bold"
        >

          Add Driver

        </button>

      </div>


      {/* DRIVER LIST */}

      <div className="bg-[#16213e] p-5 rounded-2xl mt-6">

        <h2 className="text-2xl font-bold mb-5">

          Driver List

        </h2>

        {

          drivers.length === 0

          ? (

            <p>

              No Drivers Found

            </p>

          )

          : (

            drivers.map((driver) => (

              <div
                key={driver.id}
                className="bg-[#24304d] p-4 rounded-xl mb-4"
              >

                <p className="mb-2">

                  Name:
                  {" "}

                  {driver.name}

                </p>

                <p className="mb-2">

                  Email:
                  {" "}

                  {driver.email}

                </p>

                <p className="mb-2">

                  Bus:
                  {" "}

                  {driver.bus}

                </p>

                <button
                  onClick={() =>
                    handleDeleteDriver(
                      driver.id
                    )
                  }
                  className="bg-red-500 px-5 py-2 rounded-xl font-bold"
                >

                  Delete

                </button>

              </div>

            ))

          )

        }

      </div>

    </div>

  );

}

export default AdminDashboard;