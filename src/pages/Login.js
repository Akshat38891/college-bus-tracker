import { useState } from "react";

import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword
} from "firebase/auth";

import {
  auth
} from "../firebase/config";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const handleLogin = async () => {

  try {

    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    alert("Login Successful");

    navigate("/home");

  } catch (error) {

    alert("Invalid Email or Password");

  }

};


  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

      <div className="bg-slate-900 w-full max-w-md rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-white text-center">

          Welcome Back

        </h1>

        <p className="text-slate-400 text-center mt-2">

          Login to continue

        </p>


        <div className="mt-8">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none mb-4"
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />


          <button
            onClick={handleLogin}
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 duration-300 text-white py-4 rounded-2xl text-lg font-semibold"
          >

            Login

          </button>
          <p
  onClick={() => navigate("/signup")}
  className="text-center text-blue-400 mt-5 cursor-pointer"
>

  Don't have an account? Signup

</p>

        </div>

      </div>

    </div>

  );
}

export default Login;