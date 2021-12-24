import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { GiStarsStack } from "react-icons/gi";
import { BsCalendarDateFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./favourite.css";
const Fav = () => {

  const [check, setCheck] = useState([]);

  
  useEffect(() => {
    setCheck(JSON.parse(localStorage.getItem("movie")));
  }, []);
const fnd=async(id)=>{
  try{
    const posts=check.filter((elem)=>{
      return elem.id!==id
    })
    await localStorage.removeItem('movie',posts)
  }catch(error) {
    console.log('error: ', error);
  }
 
}

 

  let img = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
     



      {check &&
        check.map((element, index) => {
          return (
            <center>
              <Card className="mainCrd" key={index}>
                <div className="favCrd">
                  <Card.Img
                    className="crdImg"
                    variant="top"
                    src={img + element.poster_path}
                    alt="name"
                  />
                  <Card.Body>
                    <span className="span1">
                      {" "}
                      {element.vote_average}
                      <GiStarsStack className="star" />
                    </span>
                    <Card.Title className="tit">
                      {element.original_title}
                    </Card.Title>

                    <Card.Text className="txt">{element.overview}</Card.Text>
                    <ListGroupItem className="list">
                      Language:{element.original_language}
                    </ListGroupItem>

                    <div className="sm1">
                      <label className="lab">
                        {element.release_date}
                        <BsCalendarDateFill />
                      </label>
                      <label className="lab">{element.vote_count}Votes</label>
                    </div>
                    <Button className="button1"onClick={()=>{fnd(element.id)}}>Remove From Favourites</Button>
                  </Card.Body>
                </div>
              </Card>
            </center>
          );
        })}
    </>
  );
};
export default Fav;
