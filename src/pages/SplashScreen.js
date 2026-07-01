import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SplashScreen() {

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/home");

    }, 3000);

    return () => clearTimeout(timer);

  }, [navigate]);

  return (

    <div
      style={{
        height: "100vh",
        background: "#020b24",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "52px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}
      >
        College Bus Tracker
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#60a5fa"
        }}
      >
        Smart Bus Tracking System
      </p>

    </div>

  );

}

export default SplashScreen;