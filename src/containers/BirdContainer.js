import { useEffect, useState } from "react";
import BirdMap from "../components/BirdMap";
import Footer from "../components/Footer";
import Title from "../components/Title";

const BirdContainer = ({ rarestbirds }) => {
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    getBirds(rarestbirds[0].url);
    // eslint-disable-next-line
  }, []);

  const getBirds = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((birds) => setBirds(birds.recordings))
      .catch((err) => console.error);
  };

  console.log(birds);

  const handleSelectChange = (event) => {
    getBirds(event.target.value);
  };

  return (
    <div className="page">
      <Title handleSelectChange={handleSelectChange} rarestbirds={rarestbirds} />
      <BirdMap birds={birds} />
      <Footer />
    </div>
  );
};

export default BirdContainer;
