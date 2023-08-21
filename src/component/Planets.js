import axios from "axios";
import React, { useEffect, useState } from "react";

const Planets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setPlanets(responseJson.results);
        })
    })
    return(
        <div className="container">
            {planets.map((planet, indexPlanet) => {
                return(
                    <div className="planets" key={indexPlanet}>
                        <li><span>Name: </span> {planet.name}</li>
                        <li><span>Population: </span> {planet.population}</li>
                        <li><span>Climate: </span> {planet.climate}</li>
                        <li><span>Terrain: </span> {planet.terrain}</li>
                    </div>
                );
            })

            }
        </div>
    );
}

export default Planets;