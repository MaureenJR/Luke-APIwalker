
import axios from "axios";
import React, { useState, useEffect } from "react";

const People = () => {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setPeople(responseJson.results);
        })
    },[])

    return(
        <div className="container">
            {people.map((person,indexPerson)=>{
                return(
                    <div className="people" key={indexPerson}>
                        <li>{person.id}</li>
                        <li className="name">{person.name}</li>
                        <li><span>Height: </span> {person.height}</li>
                        <li><span>Hair Color: </span>{person.hair_color}</li>
                        <li><span>Birth Year: </span> {person.birth_year}</li>
                        <li><span>Homeworld: </span>{person.homeworld}</li>
                    </div>
                )
            })
            }
        </div>
    )
}

export default People;