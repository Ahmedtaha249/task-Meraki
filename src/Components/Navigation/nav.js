import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { BiNotification } from "react-icons/bi";
import { infor } from "../../App";
import "./nav.css"
const Navbar=()=>{
    const information=useContext(infor)
return(
    <>
<div className="link">
    <br></br> <br></br>
    <Link className="l1" to="/">Home</Link>
    <Link className="l2" to="fav">   Favourite<BiNotification   /></Link>
</div>
</>)
}
export default Navbar;