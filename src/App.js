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

        <Route
          path="/bus"
          element={<BusTracker />}
        />

        <Route
          path="/student"
          element={<StudentMap />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;