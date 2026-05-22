import AdminMap from "./components/AdminMap";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import BusTracker from "./components/BusTracker";

import StudentMap from "./components/StudentMap";

function App() {

  return (

    <BrowserRouter>

      <Routes>
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