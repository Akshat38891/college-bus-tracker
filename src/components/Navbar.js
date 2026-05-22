import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div
      style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        padding:"15px",
        background:"#1e293b"
      }}
    >

      <Link to="/student">
        Student
      </Link>

      <Link to="/bus">
        Bus
      </Link>

      <Link to="/admin">
        Admin
      </Link>

    </div>

  );
}

export default Navbar;