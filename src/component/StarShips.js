import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kenobi from './img/Kenobi.png'

const StarShip = () => {
    const [starship, setStarShip] = useState({});
    const {id} = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/starships/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setStarShip(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
    },[id])
    
    if(!error){
        return(
            <div className="starship">
                <li className="name">{starship.name}</li>
                <li><span>Model: </span> {starship.model}</li>
                <li><span>Manufacturer: </span>{starship.manufacturer}</li>
                <li><span>Crew: </span> {starship.crew}</li>
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

export default StarShip;