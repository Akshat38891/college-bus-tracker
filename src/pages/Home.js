import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    

  <div className="min-h-screen bg-slate-950 text-white pb-24">

    {/* HEADER */}

    <div className="bg-slate-900 px-6 py-5 flex justify-between items-center shadow-xl">

      <div>

        <h1 className="text-2xl font-bold">

          Bus Tracker

        </h1>

        <p className="text-slate-400 text-sm">

          Real-time College Transport

        </p>

      </div>

      <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center font-bold">

        A

      </div>

    </div>


    {/* MAIN */}

    <div className="p-5">

      <h1 className="text-4xl font-bold text-center mb-8">

        College Bus Tracker

      </h1>


      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400">

            Active Buses

          </p>

          <h1 className="text-5xl font-bold mt-2">

            2

          </h1>

        </div>


        <div className="bg-slate-800 p-6 rounded-3xl">

          <p className="text-slate-400">

            Students Online

          </p>

          <h1 className="text-5xl font-bold mt-2">

            5

          </h1>

        </div>

      </div>


      {/* BUS STATUS */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 rounded-3xl mb-6 shadow-2xl">

        <h1 className="text-3xl font-bold">

          Bus Status

        </h1>

        <p className="mt-2 text-slate-100">

          Bus is currently running on Route A

        </p>

        <button
          onClick={() => navigate("/student")}
          className="mt-5 bg-white text-black px-6 py-3 rounded-2xl font-bold"
        >

          Track Now

        </button>

      </div>


      {/* FEATURES */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


        {/* STUDENT */}

        <div
          onClick={() => navigate("/student")}
          className="bg-slate-800 p-6 rounded-3xl cursor-pointer hover:bg-slate-700 duration-300"
        >

          <h1 className="text-3xl font-bold">

            Student Panel

          </h1>

          <p className="text-slate-400 mt-2">

            Track live bus location

          </p>

        </div>


        {/* BUS */}

        <div
          onClick={() => navigate("/bus")}
          className="bg-slate-800 p-6 rounded-3xl cursor-pointer hover:bg-slate-700 duration-300"
        >

          <h1 className="text-3xl font-bold">

            Bus Driver Panel

          </h1>

          <p className="text-slate-400 mt-2">

            Share live GPS location

          </p>

        </div>


        {/* ADMIN */}

        <div
          onClick={() => navigate("/admin")}
          className="bg-slate-800 p-6 rounded-3xl cursor-pointer hover:bg-slate-700 duration-300"
        >

          <h1 className="text-3xl font-bold">

            Admin Dashboard

          </h1>

          <p className="text-slate-400 mt-2">

            Monitor all users

          </p>

        </div>


        {/* PROFILE */}

        <div
          onClick={() => navigate("/profile")}
          className="bg-slate-800 p-6 rounded-3xl cursor-pointer hover:bg-slate-700 duration-300"
        >

          <h1 className="text-3xl font-bold">

            Profile

          </h1>

          <p className="text-slate-400 mt-2">

            View student details

          </p>

        </div>

      </div>

    </div>


    {/* BOTTOM NAV */}

    <div className="fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 flex justify-around py-4">

      <button
        onClick={() => navigate("/home")}
        className="text-white"
      >
        Home
      </button>

      <button
        onClick={() => navigate("/student")}
        className="text-white"
      >
        Track
      </button>

      <button
        onClick={() => navigate("/profile")}
        className="text-white"
      >
        Profile
      </button>

    </div>

  </div>


  );
}

export default Home;