import { useNavigate } from "react-router-dom";


function RoleSelect() {

  const navigate = useNavigate();


  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

      <div className="w-full max-w-md">

        <h1 className="text-5xl font-bold text-white text-center mb-10">

          College Bus Tracker

        </h1>


        <div className="space-y-5">


          <button
            onClick={() => navigate("/student-login")}
            className="w-full bg-blue-500 text-white p-5 rounded-3xl text-2xl font-bold"
          >

            Student Login

          </button>


          <button
            onClick={() => navigate("/driver-login")}
            className="w-full bg-green-500 text-white p-5 rounded-3xl text-2xl font-bold"
          >

            Bus Driver Login

          </button>


          <button
            onClick={() => navigate("/admin-login")}
            className="w-full bg-red-500 text-white p-5 rounded-3xl text-2xl font-bold"
          >

            Admin Login

          </button>

        </div>

      </div>

    </div>

  );

}

export default RoleSelect;