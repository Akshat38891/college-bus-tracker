import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import BusTracker from "./components/BusTracker";

import StudentMap from "./components/StudentMap";

import AdminMap from "./components/AdminMap";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/bus"
          element={<BusTracker />}
        />

        <Route
          path="/student"
          element={<StudentMap />}
        />

        <Route
          path="/admin"
          element={<AdminMap />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;