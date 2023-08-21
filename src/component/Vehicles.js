import axios from "axios";
import React, { useEffect, useState } from "react";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect (() => {
        axios.get("https://swapi.dev/api/vehicles/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setVehicles(responseJson.results);
        })
    },[])
    return(
        <div className="container">
            {vehicles.map((vehicle,indexVehicle) => {
                return(
                    <div className="vehicles" key={indexVehicle}>
                        <li><span>Name: </span>{vehicle.name}</li>
                        <li><span>Model: </span>{vehicle.model}</li>
                        <li><span>Vehicle Class: </span>{vehicle.vehicle_class}</li>
                        <li><span>Cost: </span>{vehicle.cost_in_credits} credits</li>
                    </div>
                );
            })

            }
        </div>
    );
}

export default Vehicles;