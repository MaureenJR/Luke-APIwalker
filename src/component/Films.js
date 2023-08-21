import axios from "axios";
import React, { useEffect, useState } from "react";


const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.dev/api/films/")
        .then(response => response.data)
        .then(responseJson => {
            console.log(responseJson);
            setFilms(responseJson.results);
        })
    },[])
    return(
        <div className="container">
            {films.map((movie, indexMovie) => {
                return(
                    <div className="film" key={indexMovie}>
                        <li><span>Film:</span> {movie.title}</li>
                        <li><span>Director</span> {movie.director}</li>
                        <li><span>Producer:</span> {movie.producer}</li>
                        <li><span>Episode:</span> {movie.episode_id}</li>
                    </div>
                )
            })
            }
        </div>
    );
}

export default Films;

