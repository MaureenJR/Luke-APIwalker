import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kenobi from './img/Kenobi.png'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState({});
    const {id} = useParams();
    const [error, setError] = useState(false);

    useEffect (() => {
        axios
        .get(`https://swapi.dev/api/vehicles/${id}`)
        .then((response) =>{
            setError(false);
            console.log(response.data);
            setVehicles(response.data);
        })
        .catch((err) =>{
            console.log(err);
            setError(true);
        })
        
    },[id])

    if(!error){
        return(
            <div className="vehicles">
                <li className="name">{vehicles.name}</li>
                <li><span>Model: </span>{vehicles.model}</li>
                <li><span>Vehicle Class: </span>{vehicles.vehicle_class}</li>
                <li><span>Cost: </span>{vehicles.cost_in_credits} credits</li>
            </div>
        );
    }else {
        return(
            <div className="error">
                <h2>Young padawan, these are not the droids you are looking for. May the Force be with you.</h2>
                <img src={Kenobi} alt="Kenobi Img"/>
            </div>
        );
    }
    
}

export default Vehicles;