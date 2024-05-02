import React, { useContext } from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import Filter from "./Filter";
import { apiUrl,filterData } from "../data";
import { useState,useEffect } from "react";
import Spinner from "./Spinner";
import {toast} from "react-toastify";
import { RiEdit2Fill } from "react-icons/ri";
import { Context } from "../utills/Context";
import axios from "axios";


const AllCourses = () => { 
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const {apiData, setApiData} = useContext(Context);
  const{cartCourses,setCartCourses} = useContext(Context);
  const{responseData} = useContext(Context);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
        setCourses(output.data);
        setApiData(output.data);
        console.log(output.data);
    }
    catch(error) {
        toast.error("Network issue");
    }
    setLoading(false);
  }

  const fetchCartItems = () =>{
       axios.get(`http://localhost:9090/api/eLearning/v1/getAllCartItem/${responseData.phoneNumber}`).then((response)=>{
        console.log(response.data)
        setCartCourses(response.data);
       })
  }

  useEffect(() => {
    fetchData();
    fetchCartItems();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 ">
      <div>
        <Nav title="Top Courses"/>
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
  );
};

export default AllCourses;
