import { useEffect, useState } from "react";
import BirdList from "../components/BirdList";
import BirdMap from "../components/BirdMap";

const BirdContainer = () => {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        getBirds();
    }, [])

    const getBirds = function(){
        fetch("https://xeno-canto.org/api/2/recordings?query=gen:menura")
        .then(res => res.json())
        .then(birds => setBirds(birds.recordings))
    }

    return(

        <>
            <BirdMap birds={birds}/>  
            {/* <BirdList birds={birds}/> */}
        </>
    )
}

export default BirdContainer;