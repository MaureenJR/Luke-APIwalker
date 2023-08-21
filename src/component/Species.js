import axios from "axios";
import React, { useEffect, useState } from "react";

const Species = () => {
    const [species, setSpecies] = useState([]);

    useEffect (() => {
        axios.get("https://swapi.dev/api/species/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setSpecies(responseJson.results);
        })
    },[])

    return(
        <div className="container">
            {species.map ((specie, indexSpecie) => {
                return(
                    <div className="species" key={indexSpecie}>
                        <li><span>Name: </span> {specie.name}</li>
                        <li><span>Classification : </span> {specie.classification}</li>
                        <li><span>Designation: </span> {specie.designation}</li>
                        <li><span>Language : </span> {specie.language}</li>
                    </div>
                );
            })
            }
        </div>
    );
}

export default Species;