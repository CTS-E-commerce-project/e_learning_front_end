import React from "react";
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


const HomePage = () => { 
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
        <p>(User Name)</p>
        <p>User Info</p>
        <p className="edit_icon"><RiEdit2Fill /></p>
      </div>
      <button className="button_style" onClick={()=>handleButtonClick(1)}>Liked Courses</button>
      <button className="button_style" onClick={()=>handleButtonClick(2)}>Cart</button>
      <button className="button_style" onClick={()=>handleButtonClick(3)}>All Courses</button>
      <button className="button_style" onClick={()=>handleButtonClick(4)}>About Us</button>
    </div>
    {currentPageView()}
   </div>
  );
};

export default HomePage;
