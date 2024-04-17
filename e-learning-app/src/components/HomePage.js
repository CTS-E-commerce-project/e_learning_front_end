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


const HomePage = () => { 
  const[currentPage,setCurrentPage]= useState(null);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
        toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="main_div">
    <div className="sideBar">
      <div className="user_info button_style">
        <h3>Hi,</h3>
        <p>(User Name)</p>
        <p>User Info</p>
        <p className="edit_icon"><RiEdit2Fill /></p>
      </div>
      <button className="button_style">Liked Courses</button>
      <button className="button_style">Cart</button>
      <button className="button_style">All Courses</button>
      <button className="button_style">About Us</button>
    </div>
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <Nav/>
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
   </div>
  );
};

export default HomePage;
