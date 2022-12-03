import React from "react";

const Title = ({handleSelectChange, rarestbirds}) => {

    return(
        <>
        <h1>Listen to the 10 Rarest Birds in the World</h1>
        <select onChange={handleSelectChange}>
        {rarestbirds.map(rarestbird => {
          return <option key={rarestbird.name} value={rarestbird.url}>{rarestbird.name}</option>
        })}
      </select>
        </>
    )
}

export default Title;