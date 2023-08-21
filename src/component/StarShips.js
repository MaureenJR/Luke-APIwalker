import axios from "axios";
import React, { useEffect, useState } from "react";

const StarShip = () => {
    const [starship, setStarShip] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setStarShip(responseJson.results);
        })
    },[])
    
    return(
        <div className="container">
            {starship.map((ship,indexShip) => {
                return(
                    <div className="starship" key={indexShip}>
                        <li><span>Starship: </span> {ship.name}</li>
                        <li><span>Model: </span> {ship.model}</li>
                        <li><span>Manufacturer: </span>{ship.manufacturer}</li>
                        <li><span>Crew: </span> {ship.crew}</li>
                    </div>
                );
            })
            }
        </div>
    );
}

export default StarShip;