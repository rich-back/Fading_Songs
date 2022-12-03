import { MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
// import birdicon from "./images/bird-icon.png"
import L from "leaflet";
import { useEffect, useRef, useState } from "react";


const BirdMap = ({ birds }) => {

    const birdIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/8845/8845053.png',
        iconSize: [45,70],
        iconAnchor: [22, 70],
        popupAnchor: [0, -68]
    })



  return (
<>
    <MapContainer center={[55.9533, -3.1883]} zoom={2} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {birds.map((bird) => {
        return <Marker 
        icon={birdIcon}
        key={bird.id}
        position={[bird.lat, bird.lng]}>
        <Popup>
            {bird.sex}{bird.en}<br></br>
            recorded by {bird.rec}
            <img src={bird.sono.small}/>
            <figure>
             <audio
            controls
            src={bird.file}>
            </audio>
            <figcaption>Listen to the {bird.en}:</figcaption>
            </figure>


        </Popup>
        </Marker>;
      })}
    </MapContainer>


</>

  );
};

export default BirdMap;
