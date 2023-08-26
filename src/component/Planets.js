import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kenobi from './img/Kenobi.png'

const Planets = () => {
    const [planet, setPlanet] = useState({});
    const {id} = useParams();
    const [error, setError] = useState (false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setPlanet(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
    },[id])

    if(!error){
        return(
            <div className="planets">
                <li className="name">{planet.name}</li>
                <li><span>Population: </span> {planet.population}</li>
                <li><span>Climate: </span> {planet.climate}</li>
                <li><span>Terrain: </span> {planet.terrain}</li>
            </div>
        );
    } else{
        return(
            <div className="error">
                <h2>Young padawan, these are not the droids you are looking for. May the Force be with you.</h2>
                <img src={Kenobi} alt="Kenobi Img"/>
            </div>
        );
    }
}

export default Planets;