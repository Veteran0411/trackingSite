import React from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon=L.icon({
    iconUrl:"./bus-stop.png",
    iconSize:[38,38]
})

const position = [15.865597, 74.518238];
const gitPosition=[15.81527075, 74.48744361563915];
// [15.81527075, 74.48744361563915]  git lat, long

const Map = () => {
    return (
        <>
        <MapContainer center={position} zoom={14}  style={{width:"100%",height:"100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* icon={icon} */}
            <Marker position={position} Popup="You">
                {/* <Popup> check use of popup
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
            </Marker>
            <Marker position={gitPosition} Popup="College">
            </Marker>
        </MapContainer>
    </>
  )
}

export default Map