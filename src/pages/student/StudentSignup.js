import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../../firebase/config";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function StudentSignup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [route, setRoute] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async () => {

    if (
      !name ||
      !email ||
      !password ||
      !enrollment ||
      !branch ||
      !year ||
      !route ||
      !phone
    ) {
      alert("Please Fill All Fields");
      return;
    }

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await set(ref(database, `students/${user.uid}`), {
        uid: user.uid,
        name,
        email,
        enrollment,
        branch,
        year,
        route,
        phone,
        role: "student",
        createdAt: Date.now()
      });

      alert("Registration Successful");

      navigate("/student-home");

    } catch (error) {

      alert(error.message);

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

      <div className="bg-slate-900 w-full max-w-md rounded-3xl p-8 shadow-xl">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Student Signup
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />

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

          <input
            type="text"
            placeholder="Enrollment Number"
            value={enrollment}
            onChange={(e)=>setEnrollment(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={(e)=>setBranch(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e)=>setYear(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />

          <select
            value={route}
            onChange={(e)=>setRoute(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          >

            <option value="">Select Pickup Stop</option>

            <option>Rajwada</option>
            <option>Palasia</option>
            <option>Bhanwarkua</option>
            <option>Teen Imli</option>
            <option>Vijay Nagar</option>
            <option>LIG</option>
            <option>Robot Square</option>
            <option>Dewas Naka</option>

          </select>

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="w-full p-4 rounded-2xl bg-slate-800 text-white outline-none"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 hover:bg-blue-700 duration-300 text-white p-4 rounded-2xl font-bold text-xl"
          >
            Register
          </button>

          <button
            onClick={()=>navigate("/student-login")}
            className="w-full bg-slate-700 hover:bg-slate-600 duration-300 text-white p-4 rounded-2xl"
          >
            Already Have Account? Login
          </button>

        </div>

      </div>

    </div>

  );

}

export default StudentSignup;