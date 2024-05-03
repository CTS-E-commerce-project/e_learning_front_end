import React, { useContext } from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import Filter from "./Filter";
import { apiUrl,filterData } from "../data";
import { useState,useEffect } from "react";
import Spinner from "./Spinner";
import {toast} from "react-toastify";
import "./css/HomePage.css";
import { RiEdit2Fill } from "react-icons/ri";
import AllCourses from "./AllCourses";
import LikedCourses from "./LikedCourses";
import Cart from "./Cart";
import About from "./About";
import { Context } from "../utills/Context";
import { useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";
import ViewCourses from "./ViewCourses";
import LoginPage from "./LoginPage";


const HomePage = () => { 
  const navigate = useNavigate();
  const {responseData} = useContext(Context);
  const[currentPage,setCurrentPage]= useState(0);
  const currentPageView=()=>{
    if(currentPage==0){
      return <AllCourses/>;
  }
  else if(currentPage==1){
    return <LikedCourses/>
  }
  else if(currentPage==2){
    return <Cart/>
  }
  else if(currentPage==3){
    return <AllCourses/>
  }
  else if(currentPage==4){
    return <About/>
  }
  else if(currentPage ==5){
    return <AllUsers/>
  }
  else if(currentPage ==6){
    return <ViewCourses/>
  }
  else if(currentPage ==7){
    navigate("/", { replace: true });
  }
  }
  const handleButtonClick=(input)=>{
    console.log(input);
      setCurrentPage(input);
  }

  return (
    <div className="main_div">
    <div className="sideBar">
      <div className="user_info button_style">
        <h3>Hi,</h3>
        <p>{responseData.userName}</p>
        <p>Number({responseData.phoneNumber})</p>
        <p className="edit_icon"><RiEdit2Fill /></p>
      </div>
      
      <button className="button_style" onClick={()=>handleButtonClick(1)}>Liked Courses</button>
      <button className="button_style" onClick={()=>handleButtonClick(2)}>Cart</button>
      <button className="button_style" onClick={()=>handleButtonClick(3)}>Courses</button>
      {responseData.role ==="admin"? <button className="button_style" onClick={()=>handleButtonClick(5)}>View users</button>:
      null}
      {responseData.role ==="admin"? <button className="button_style" onClick={()=>handleButtonClick(6)}>view Courses</button>:
      null}
      <button className="button_style" onClick={()=>handleButtonClick(4)}>About Us</button>
      <button className="button_style" onClick={()=>handleButtonClick(7)}>Log Out</button>
    </div>
    {currentPageView()}
   </div>
  );
};

export default HomePage;
