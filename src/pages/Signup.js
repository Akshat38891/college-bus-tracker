import { useState } from "react";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  ref,
  set
} from "firebase/database";

import {
  auth,
  database
} from "../firebase/config";


import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [enrollment, setEnrollment] = useState("");

  const [year, setYear] = useState("");

  const [route, setRoute] = useState("");

  const [phone, setPhone] = useState("");

  const [branch, setBranch] = useState("");

  const [batch, setBatch] = useState("");


  const handleSignup = async () => {

  try {

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    await set(
      ref(database, `users/${user.uid}`),
      {
        name,
        email,
        enrollment,
        branch,
        year,
        route,
        phone
      }
    );

    alert("Student Registered");

    navigate("/home");

  } catch (error) {

    alert(error.message);

  }

};
  return (

  <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

    <div className="bg-slate-900 w-full max-w-md rounded-3xl p-8">

      <h1 className="text-4xl font-bold text-white text-center mb-8">

        Student Signup

      </h1>


      <div className="space-y-5">

        <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
/>

        <input
          type="email"
          placeholder="Email"
          value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Enrollment Number"
          value={enrollment}
onChange={(e) => setEnrollment(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Branch"
          value={branch}
onChange={(e) => setBranch(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Year"
          value={year}
onChange={(e) => setYear(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Bus Route"
          value={route}
onChange={(e) => setRoute(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
onChange={(e) => setPhone(e.target.value)}
className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
        />


        <button
  onClick={handleSignup}
  className="w-full bg-blue-500 hover:bg-blue-600 duration-300 text-white p-4 rounded-2xl font-bold text-xl"
>

  Register

</button>

      </div>

    </div>

  </div>

);
}

export default Signup;