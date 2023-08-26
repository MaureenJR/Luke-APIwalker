import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kenobi from './img/Kenobi.png'

const Species = () => {
    const [species, setSpecies] = useState({});
    const {id} = useParams();
    const [error, setError] = useState(false)

    useEffect (() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
        .then((response) => {
            setError(false);
            console.log(response.data);
            setSpecies(response.data);
        })
        .catch((err) => {
            console.log(err);
            setError(true);
        })
    },[id])

    if(!error){
        return(
            <div className="species">
                <li className="name">{species.name}</li>
                <li><span>Classification : </span> {species.classification}</li>
                <li><span>Designation: </span> {species.designation}</li>
                <li><span>Language : </span> {species.language}</li>
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

export default Species;