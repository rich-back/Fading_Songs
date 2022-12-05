import React from "react";

const Title = ({handleSelectChange, rarestbirds}) => {

    return(
    
    <div className="container">

    <h1 className="title">Listen to the Rarest Birds in the World</h1>

  
        <div class="bird-container bird-container--one">
          <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
          <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
          <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
          <div class="bird bird--four"></div>
        </div>


    <div>
        <select className="selector" onChange={handleSelectChange}>
        {rarestbirds.map(rarestbird => {
          return <option key={rarestbird.name} value={rarestbird.url}>{rarestbird.name}</option>
        })}
        </select>
    </div>

    {/* <div>
        Image goes here...
        {rarestbirds.map(rarestbird => {
            return <img src={rarestbird.img}/>
        })}

    </div> */}

    </div>
    
    )
}

export default Title;