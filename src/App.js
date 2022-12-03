import "./App.css";
import BirdMap from "./components/BirdMap";
import Title from "./components/Title";
import BirdContainer from "./containers/BirdContainer";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { icon } from "leaflet";

function App() {
  return (
    <>
      <Title />
      <BirdContainer />
    </>
  );
}

export default App;
