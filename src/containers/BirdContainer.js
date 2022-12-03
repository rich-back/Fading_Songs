import { useEffect, useState } from "react";
import BirdList from "../components/BirdList";
import BirdMap from "../components/BirdMap";
import Title from "../components/Title";

const BirdContainer = ({rarestbirds}) => {
    const [birds, setBirds] = useState([]);

    useEffect(() => {
        getBirds(rarestbirds[0].url);
    }, [])

    const getBirds = url => {
        fetch(url)
        .then(res => res.json())
        .then(birds => setBirds(birds.recordings))
        .catch(err => console.error);
    }

    const handleSelectChange = event => {
        getBirds(event.target.value);
    }

    return(

        <>
            <Title 
                handleSelectChange={handleSelectChange}
                rarestbirds={rarestbirds}
            />

            <BirdMap birds={birds}/>  
            {/* <BirdList birds={birds}/> */}
        </>
    )
}

export default BirdContainer;