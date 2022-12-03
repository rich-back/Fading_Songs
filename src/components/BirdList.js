import React from "react";
import Bird from "./Bird";
import BirdMap from "./BirdMap";

const BirdList = ({birds}) => {

    // const birdItems = birds.map((bird, index) => {
    //     return <Bird bird={bird} key={index}/>
    // })

    return(
        // <>
        // <h2>List of Birds:</h2>
        // <ul>
        //     {birdItems}
        // </ul>
        // </>

        <div>
            {birds.map((bird, index) => {
            return (
                <Bird
                    bird={bird} 
                    key={index}
                    image={bird.sono.small}
                    audio={bird.file}
                />
            )
        })}
        </div>
    );
};


export default BirdList;