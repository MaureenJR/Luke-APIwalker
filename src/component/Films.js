import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Kenobi from '../component/img/Kenobi.png'


const Films = () => {
    const [films, setFilms] = useState([]);
    const {id} = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/films/${id}`)
            .then((response) => {
                setError(false);
                console.log(response.data);
                setFilms(response.data);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
            })
    },[id])

    if(!error){
        return(
            <div className="film">
                <li className="name">{films.title}</li>
                <li><span>Director</span> {films.director}</li>
                <li><span>Producer:</span> {films.producer}</li>
                <li><span>Episode:</span> {films.episode_id}</li>
            </div>
        );
    } else {
        return(
            <div className="error">
                <h2>Young padawan, these are not the droids you are looking for. May the Force be with you.</h2>
                <img src={Kenobi} alt="Kenobi Img"/>
            </div>
        );
    }
}

export default Films;

