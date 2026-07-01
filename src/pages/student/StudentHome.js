import { useNavigate } from "react-router-dom";

function StudentHome() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-slate-950 text-white p-5">

      {/* HEADER */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome Student 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Track your college bus live
          </p>

        </div>

      </div>

      {/* LIVE BUS CARD */}

      <div className="bg-slate-900 rounded-3xl p-6 mt-8">

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">
              Bus No. MP09-AB-1234
            </h1>

            <p className="text-slate-400 mt-2">
              Driver: Ramesh Sharma
            </p>

            <p className="text-slate-400">
              Contact: 9876543210
            </p>

          </div>

          <div className="bg-green-500 px-5 py-3 rounded-2xl font-bold">
            LIVE
          </div>

        </div>

      </div>

      {/* DISTANCE + ETA */}

      <div className="grid grid-cols-2 gap-5 mt-6">

        <div className="bg-slate-900 p-6 rounded-3xl">

          <p className="text-slate-400">
            Distance
          </p>

          <h1 className="text-4xl font-bold mt-2">
            2.4 KM
          </h1>

        </div>

        <div className="bg-slate-900 p-6 rounded-3xl">

          <p className="text-slate-400">
            Arrival Time
          </p>

          <h1 className="text-4xl font-bold mt-2">
            8 Min
          </h1>

        </div>

      </div>

      {/* REACHED STOP */}

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 duration-300 p-5 rounded-3xl text-2xl font-bold mt-8"
      >
        Reached Stop
      </button>

      {/* MY PROFILE */}

      <button
        onClick={() => navigate("/student-profile")}
        className="w-full bg-purple-600 hover:bg-purple-700 duration-300 p-5 rounded-3xl text-2xl font-bold mt-5"
      >
        My Profile
      </button>

      {/* LIVE MAP */}

      <button
        onClick={() => navigate("/student-track")}
        className="w-full bg-green-500 hover:bg-green-600 duration-300 p-5 rounded-3xl text-2xl font-bold mt-5"
      >
        Open Live Map
      </button>

      {/* ROUTE */}

      <div className="bg-slate-900 rounded-3xl p-6 mt-8">

        <h1 className="text-3xl font-bold mb-6">
          Bus Route
        </h1>

        <div className="space-y-5 text-xl">

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            <p>Rajwada</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
            <p>Palasia</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            <p>Vijay Nagar</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <p>Bapat</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
            <p>College</p>
          </div>

        </div>

      </div>

    </div>

  );

}

export default StudentHome;