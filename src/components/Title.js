import React from "react";

function Title({ handleSelectChange, rarestbirds }) {

  return (
    <div className="container">
      <h1 className="title">Listen to the Rarest Birds in the World...</h1>

      <div className="bird-container bird-container--one">
        <div className="bird bird--one"></div>
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two"></div>
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three"></div>
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four"></div>
      </div>

      <div className="selector-container">
        <select className="selector" onChange={handleSelectChange} name={"Select a bird"}>
          {rarestbirds.map((rarestbird) => {
            return (
              <option defaultValue={'sds'} key={rarestbird.name} value={rarestbird.url}>
                {rarestbird.name}
              </option>
            );
          })}
        </select>

      </div>
    </div>
  );
};

export default Title;
