// import React, {useState}  from 'react'
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100vh",
    latitude: 40.409264,
    longitude: 49.867092,
    zoom: 10
  });

  return (
    <ReactMapGL
    mapStyle="mapbox://styles/zumrud13/ckv2m9hll3uy414p8g42uc32m"
    mapboxApiAccessToken={process.env.React_App_Mapbox_Key}
    {...viewport}
    onViewportChange={(nextViewport)=> setViewport(nextViewport)}
    >

    </ReactMapGL>
  );
}

export default Map
