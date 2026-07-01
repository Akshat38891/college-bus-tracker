import {
  FaHome,
  FaMapMarkerAlt,
  FaUser
} from "react-icons/fa";

import { Link } from "react-router-dom";


function BottomNav() {

  return (

    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 flex justify-around items-center py-4 text-white">

      <Link to="/">

        <div className="flex flex-col items-center">

          <FaHome size={22} />

          <p className="text-sm mt-1">

            Home

          </p>

        </div>

      </Link>


      <Link to="/student">

        <div className="flex flex-col items-center">

          <FaMapMarkerAlt size={22} />

          <p className="text-sm mt-1">

            Track

          </p>

        </div>

      </Link>


      <Link to="/profile">

        <div className="flex flex-col items-center">

          <FaUser size={22} />

          <p className="text-sm mt-1">

            Profile

          </p>

        </div>

      </Link>

    </div>

  );
}

export default BottomNav;