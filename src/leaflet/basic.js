import React from 'react'
import { useState } from 'react';
import { Map,TileLayer } from 'react-leaflet';

const BasicMap=()=>{
    const [center,setCenter]=useState({lat:13.084662,lng:80.248357})
    const zoom_level=9;
  return (
    <div>
        <Map
        center={center}
        zoom={zoom_level}
        >
            <TileLayer url={} attribution={}></TileLayer>
        </Map>
    </div>
  )
}

export default BasicMap