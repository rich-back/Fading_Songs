import "./App.css";
import BirdMap from "./components/BirdMap";
import Title from "./components/Title";
import BirdContainer from "./containers/BirdContainer";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { icon } from "leaflet";

function App() {

  const rarestbirds = [
    {name: "Cebu Flowerpecker", url: "https://xeno-canto.org/api/2/recordings?query=gen:Dicaeum%20quadricolor"},
    {name: "Superb Lyrebird", url: "https://xeno-canto.org/api/2/recordings?query=gen:menura"},
    {name: "Stresemann's Bristlefront", url: "https://xeno-canto.org/api/2/recordings?query=gen:Merulaxis%20stresemanni"},
    
  ]
  return (
    <>
      <BirdContainer rarestbirds={rarestbirds} />
    </>
  );
}

export default App;
