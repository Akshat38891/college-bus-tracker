import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SplashScreen from "./pages/SplashScreen";

import RoleSelect from "./pages/RoleSelect";

import StudentLogin from "./pages/student/StudentLogin";

import StudentSignup from "./pages/student/StudentSignup";

import StudentHome from "./pages/student/StudentHome";

import StudentTrack from "./pages/student/StudentTrack";

import StudentProfile from "./pages/student/StudentProfile";

import DriverLogin from "./pages/bus/DriverLogin";

import BusLive from "./pages/bus/BusLive";

import AdminLogin from "./pages/admin/AdminLogin";

import AdminDashboard from "./pages/admin/AdminDashboard";


function App() {
console.log("APP RUNNING");

  return (

    <BrowserRouter>

      <Routes>

        {/* SPLASH */}

        <Route
          path="/"
          element={<SplashScreen />}
        />

        {/* HOME */}

        <Route
          path="/home"
          element={<RoleSelect />}
        />

        {/* STUDENT */}

        <Route
          path="/student-login"
          element={<StudentLogin />}
        />

        <Route
          path="/student-signup"
          element={<StudentSignup />}
        />

        <Route
          path="/student-home"
          element={<StudentHome />}
        />

        <Route
          path="/student-track"
          element={<StudentTrack />}
        />

        <Route
          path="/student-profile"
          element={<StudentProfile />}
        />

        {/* DRIVER */}

        <Route
          path="/driver-login"
          element={<DriverLogin />}
        />

        <Route
          path="/bus-live"
          element={<BusLive />}
        />

        {/* ADMIN */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
