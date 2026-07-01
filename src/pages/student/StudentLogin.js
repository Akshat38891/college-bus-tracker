import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/config";
import { ref, get } from "firebase/database";
import { useNavigate } from "react-router-dom";

function StudentLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {
      alert("Please Enter Email & Password");
      return;
    }

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      const snapshot = await get(
        ref(database, `students/${user.uid}`)
      );

      if (!snapshot.exists()) {

        alert("Student Account Not Found");

        return;

      }

      localStorage.setItem(
        "studentId",
        user.uid
      );

      localStorage.setItem(
        "studentName",
        snapshot.val().name
      );

      alert("Login Successful");

      navigate("/student-home");

    }

    catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

      <div className="bg-slate-900 p-8 rounded-3xl w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-white text-center mb-8">

          Student Login

        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
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
            className="w-full bg-blue-600 hover:bg-blue-700 duration-300 text-white p-4 rounded-2xl text-xl font-bold"
          >
            Login
          </button>

          <button
            onClick={()=>navigate("/student-signup")}
            className="w-full bg-slate-700 hover:bg-slate-600 duration-300 text-white p-4 rounded-2xl"
          >
            Create New Account
          </button>

        </div>

      </div>

    </div>

  );

}

export default StudentLogin;