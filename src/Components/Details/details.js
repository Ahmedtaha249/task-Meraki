import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { GiStarsStack } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";


import "./details.css";
const Detail = () => {
  let id = Number(useParams().id);
  const [movies, setMovies] = useState([]);
  function getMovies() {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=f[…]esc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
      )
      .then((result) => {
        console.log(result.data.results);
        setMovies(result.data.results);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getMovies();
  }, []);
let count=0;
  const check = () => {
    let x = JSON.parse(localStorage.getItem("movie"));
    if (!x) {
      localStorage.setItem("movie", JSON.stringify(final));
      count=0
    } else {
      x.push(final[0]);
      localStorage.clear();
      localStorage.setItem("movie", JSON.stringify(x));
      count++
      console.log(count)

    }
  };
 
  const final = movies.filter((element) => {
    return element.id === id;
  });
  let img = "https://image.tmdb.org/t/p/w1280";
  let result = [];
  result.push(final);
  return (
    <>
      {final.map((result) => {
        return (
          <center>
            <Card key={result.id} className="maincrd1">
              <div className="detailscrd">
                <Card.Img
                  className="imgcrd"
                  variant="top"
                  src={img + result.poster_path}
                  alt="movie photo"
                />
                <Card.Body>
                  <span className="span2">
                    {" "}
                    {result.vote_average}
                    <GiStarsStack className="star" />
                  </span>
                  <Card.Title className="crdtit1">
                    {result.original_title}
                  </Card.Title>
                  <Card.Text className="crdtxt1">{result.overview}</Card.Text>
                  <ListGroupItem className="crdlst">
                    Language:{result.original_language}
                  </ListGroupItem>

                  <div className="sm2">
                    <label className="lab">
                      {result.release_date}
                      <BsCalendarDateFill />
                    </label>
                    <label className="lab">{result.vote_count}Votes</label>
                  </div> 
                  <Button
                 
                    className="btn2"
                    onClick={() => {
                      check();
                    }}
                  >
                  
                    Add to Favourite
                  </Button>
                </Card.Body>
              </div>
            </Card>
          </center>
        );
      })}
    </>
  );
};

export default Detail;
