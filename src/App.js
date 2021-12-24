import "./App.css";
import React,{createContext,useState} from "react";
import  Navbar from "./Components/Navigation/nav";
import  Movie from "./Components/Mainpage/main";
import Detail from "./Components/Details/details";
import Fav from "./Components/Favourite/favourite";
import {Route,  Routes,Router} from "react-router-dom";

export const  infor=createContext()
const App = () => {
const[select,setSelect]=useState()

  return (
    <div className="App">
      <Navbar/> 
      <infor.Provider value={select} >
         <Routes>
        
        
           <Route exact path="/detail/:id/" element={<Detail/>}/>
           <Route exact path="/" element={<Movie/>}/>
           <Route exact path="/fav" element={<Fav/>}/>
         
          </Routes>
          </infor.Provider>
    </div> 
  );
}

export default App;
