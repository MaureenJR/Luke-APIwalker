import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleID = (props) => {
    const [peopleID, setPeopleID] = useState([]);
    const {ID}=useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${ID}`)
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setPeopleID(responseJson.results);
        })
    },[])
    //Solo funciona si se cambia el numero en la URL

    return(
        <div className="container">

        </div>
    )
}

export default PeopleID;