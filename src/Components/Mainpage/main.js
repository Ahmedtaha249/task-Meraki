import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./main.css";
const Movie = () => {
  const [movies, setMovies] = useState();

  //let history =  useHistory();
  const history = useNavigate();
  const getMovie = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=f[…]esc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        setMovies(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  const image = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="crd">
      {movies &&
        movies.map((elem, index) => {
          return (
            <div key={index}>
              <div className="crd1">
                <img className="img" src={image + elem.poster_path} />
                <h1>
                  {elem.original_title}
                </h1>

                <p>{elem.overview}</p>
                
                
              </div>
              <div className="sm">
                  <label className="lab1">{elem.release_date}</label>
                  <label className="lab2">{elem.vote_count}Votes</label>
                </div>
              <button  className="btn"onClick={() => history(`/detail/${elem.id}`)}>
                  Details
                </button>
            </div>
          );
        })}
    </div>
  );
};
export default Movie;
