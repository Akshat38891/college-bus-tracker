import { useEffect, useState } from "react";

import { auth, database } from "../firebase/config";

import { ref, get } from "firebase/database";

import { useNavigate } from "react-router-dom";


function Profile() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);


  useEffect(() => {

    const fetchUser = async () => {

      const user = auth.currentUser;

      if (user) {

        const snapshot = await get(
          ref(database, `users/${user.uid}`)
        );

        if (snapshot.exists()) {

          setUserData(snapshot.val());

        }

      }

    };

    fetchUser();

  }, []);


  if (!userData) {

    return (

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold">

          Loading...

        </h1>

      </div>

    );

  }


  return (

    <div className="min-h-screen bg-slate-950 text-white p-5">

      {/* TOP CARD */}

      <div className="bg-slate-800 rounded-3xl p-10 text-center">

        <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto text-5xl font-bold">

          {userData.name?.charAt(0)}

        </div>

        <h1 className="text-5xl font-bold mt-6">

          {userData.name}

        </h1>

        <p className="text-slate-400 mt-3 text-xl">

          {userData.branch}

        </p>

      </div>


      {/* DETAILS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">


        {/* ENROLLMENT */}

        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400 text-lg">

            Enrollment Number

          </p>

          <h1 className="text-3xl font-bold mt-2">

            {userData.enrollment}

          </h1>

        </div>


        {/* ROUTE */}

        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400 text-lg">

            Bus Route

          </p>

          <h1 className="text-3xl font-bold mt-2">

            {userData.route}

          </h1>

        </div>


        {/* YEAR */}

        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400 text-lg">

            Year

          </p>

          <h1 className="text-3xl font-bold mt-2">

            {userData.year}

          </h1>

        </div>


        {/* PHONE */}

        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400 text-lg">

            Phone Number

          </p>

          <h1 className="text-3xl font-bold mt-2">

            {userData.phone}

          </h1>

        </div>

      </div>


      {/* BUTTONS */}

      <div className="flex gap-5 mt-10">

        <button
          onClick={() => navigate("/home")}
          className="bg-blue-600 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-blue-500 duration-300"
        >

          Home

        </button>


        <button
          onClick={() => navigate("/student")}
          className="bg-green-600 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-green-500 duration-300"
        >

          Track Bus

        </button>

      </div>

    </div>

  );

}

export default Profile;