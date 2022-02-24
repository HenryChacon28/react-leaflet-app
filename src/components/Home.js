import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <div>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <a className="navbar-brand"><h1>Geolocation</h1></a>
      </div>
      </nav>
      </div>
      <div className="container">
      <p>Latitude: {state.latitude}</p>
      <p>longitude: {state.longitude}</p>
      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
      >
        Ver tu Ubicación
      </Link>
      </div>
    </div>
  );
};

export default Home;
