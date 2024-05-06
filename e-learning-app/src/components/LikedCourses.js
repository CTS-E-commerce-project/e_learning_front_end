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
import EmptyLiked from "./EmptyLiked";


const LikedCourses = () => { 
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const {apiData, setApiData} = useContext(Context);
  const {responseData} = useContext(Context);
  const {likedCourses,setLikedCourses} = useContext(Context);
 
 function fetchData() {
    setLoading(true);
    let likedCourseData = apiData.filter((item)=>{
      return likedCourses.includes(item.id);
    })
    setCourses(likedCourseData);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [likedCourses])
  

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2 w-[1200px]">
      <div>
        <Nav title="Liked Courses"/>
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
         {likedCourses.length < 1 ? <EmptyLiked/> : loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>) }
        </div>
      </div>
    </div>
  );
};

export default LikedCourses;
