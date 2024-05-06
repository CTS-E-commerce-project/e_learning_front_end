import React, { useContext, useEffect } from 'react'
import Card from './Card';
import { useState } from 'react';
import { Context } from '../utills/Context';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    // let [courses,setCourses]=useState([]);
    const [likedCourses, setLikedCourses] = useState([]);
    // const {apiData} = useContext(Context);
    // console.log(apiData);
    // let courses = apiData;

    useEffect(()=>{

    },[])
    
    function getCourses(){
      if(category === "All"){
        return courses;
      }else{
        console.log(category);
        courses = courses.filter(course=>{
          return course.courseType === category;
        })
        return courses;
      }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map( (course) => (
            <Card key={course.id} 
            course = {course} 
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        ))
      }
    </div>
  )
}

export default Cards
