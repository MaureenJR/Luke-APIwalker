
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Kenobi from './img/Kenobi.png'


const People = () => {
    const [people, setPeople] = useState({});
    const {id} = useParams();
    const [error, setError] = useState(false);
    const [homeworld, setHomeworld] = useState();
    const [homeworldId, setHomeworldId] = useState();
    

    useEffect(()=>{
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setPeople(response.data);
                getHomeworldId(response.data.homeworld);
                axios
                    .get(response.data.homeworld)
                    .then((homeworldResponse) =>{
                        console.log(homeworldResponse.data.name);
                        setHomeworld(homeworldResponse.data.name);
                    })
            })
            .catch((err) =>{
                console.log(err);
                setError(true);
            });
    }, [id]);

    const getHomeworldId = (homeworldURL) =>{
        // Agarrar id de un digito
        if(homeworldURL.charAt(homeworldURL.length - 3) === "/"){
            const hwId = homeworldURL.charAt(homeworldURL.length - 2);
            setHomeworldId(hwId);
        } else{
            // Agarrar id de dos digitos
            const firstId = homeworldURL.charAt(homeworldURL.length - 3);
            const secondId = homeworldURL.charAt(homeworldURL.length - 2);
            const id = `${firstId}${secondId}`;
            setHomeworldId(id);
        }
    }

    if(!error){
        return(
            <div className="people">
                <li className="name">{people.name}</li>
                <li><span>Height: </span> {people.height}</li>
                <li><span>Hair Color: </span>{people.hair_color}</li>
                <li><span>Birth Year: </span> {people.birth_year}</li>
                <li><span>Homeworld: </span>{homeworld}</li>
                <Link to={`/planets/${homeworldId}`}> Homeworld </Link>
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

export default People;