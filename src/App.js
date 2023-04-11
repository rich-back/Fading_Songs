import "./App.css";
import BirdContainer from "./containers/BirdContainer";

function App() {
  const rarestbirds = [
    {
      name: "Philippine Dwarf Kingfisher",
      url: "https://xeno-canto.org/api/2/recordings?query=nr:67918-67919",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/Webp.net-resizeimage-8-3_480x480.jpg?v=1623748435",
    },
    {
      name: "Stresemann's Bristlefront",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Merulaxis%20stresemanni",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/DkLGYYHWsAIHlck_480x480.jpg?v=1623745473",
    },
    {
      name: "New Zealand Rockwren",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Xenicus%20gilviventris",
      img: "https://cdn6.nzgeo.com/1970/01/97_Wren_Header-2000x1334.jpg",
    },
    {
      name: "Kakapo",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Strigops%20habroptila",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/kakapo_480x480.png?v=1623665918",
    },
    {
      name: "Imperial Amazon",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Amazona%20imperialis",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/shutterstock_1667208361_480x480.jpg?v=1623738301",
    },
    {
      name: "Cebu Flowerpecker",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Dicaeum%20quadricolor",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/Cebu_flowerpecker_Dicaeum_quadricolor_480x480.jpg?v=1623745246",
    },
    {
      name: "Golden Pheasant",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Chrysolophus%20pictus",
      img: "https://cdn.shopify.com/s/files/1/1317/9597/files/golden_pheasant_480x480.png?v=1623664221",
    },
    {
      name: "Lyrebird",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:menura",
    },
    {
      name: "Crested Ibis",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Nipponia%20nippon",
    },
    {
      name: "Scaly-sided Merganser",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Mergus%20squamatus",
    },
    {
      name: "Red-crowned Crane",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Grus%20japonensis",
    },
    {
      name: "Christmas Frigatebird",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Fregata%20andrewsi",
    },
    {
      name: "Regent Honeyeater",
      url: "https://xeno-canto.org/api/2/recordings?query=gen:Anthochaera%20phrygia",
    },
  ];
  return (
      <BirdContainer rarestbirds={rarestbirds} />
  );
}

export default App;
