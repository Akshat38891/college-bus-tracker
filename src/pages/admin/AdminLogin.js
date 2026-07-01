import { useState } from "react";

import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [adminId, setAdminId] =
    useState("");

  const [password, setPassword] =
    useState("");


  const handleLogin = () => {

    if (
      adminId === "admin"
      &&
      password === "ADMIN123"
    ) {

      navigate("/admin-dashboard");

    }

    else {

      alert("Wrong Admin Credentials");

    }

  };


  return (

    <div className="min-h-screen bg-[#020b24] flex justify-center items-center">

      <div className="bg-[#16213e] p-10 rounded-3xl w-[400px]">

        <h1 className="text-white text-4xl font-bold text-center mb-8">

          Admin Login

        </h1>

        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) =>
            setAdminId(e.target.value)
          }
          className="w-full p-4 mb-5 rounded-xl bg-[#24304d] text-white outline-none"
        />

        <input
          type="password"
          placeholder="Secret Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full p-4 mb-6 rounded-xl bg-[#24304d] text-white outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-500 text-white p-4 rounded-xl font-bold"
        >

          Login

        </button>

      </div>

    </div>

  );

}

export default AdminLogin;