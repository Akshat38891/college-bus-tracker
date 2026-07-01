import { useEffect, useState } from "react";
import { auth, database } from "../../firebase/config";
import { ref, get } from "firebase/database";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function StudentProfile() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({});

  useEffect(() => {

    const user = auth.currentUser;

    if (!user) {
      navigate("/student-login");
      return;
    }

    const fetchData = async () => {

      const snapshot = await get(
        ref(database, `students/${user.uid}`)
      );

      if (snapshot.exists()) {
        setStudent(snapshot.val());
      }

    };

    fetchData();

  }, []);

  const handleLogout = async () => {

    await signOut(auth);

    alert("Logged Out");

    navigate("/student-login");

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-5">

      <div className="bg-slate-900 w-full max-w-lg rounded-3xl p-8">

        <h1 className="text-4xl font-bold text-center text-white mb-8">

          My Profile

        </h1>

        <div className="space-y-5 text-white text-xl">

          <div>
            <b>Name :</b> {student.name}
          </div>

          <div>
            <b>Email :</b> {student.email}
          </div>

          <div>
            <b>Enrollment :</b> {student.enrollment}
          </div>

          <div>
            <b>Branch :</b> {student.branch}
          </div>

          <div>
            <b>Year :</b> {student.year}
          </div>

          <div>
            <b>Bus Route :</b> {student.route}
          </div>

          <div>
            <b>Phone :</b> {student.phone}
          </div>

        </div>

        <button
          onClick={() => navigate("/student-home")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-2xl font-bold mt-8"
        >
          Back
        </button>

        <button
          onClick={() => alert("Edit Profile Coming Soon")}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl font-bold mt-4"
        >
          Edit Profile
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl font-bold mt-4"
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default StudentProfile;