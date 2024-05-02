import React, { useContext, useState } from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
import { Context } from '../utills/Context';
import axios from 'axios';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    const {responseData} = useContext(Context);
    let phoneNo = responseData.phoneNumber;
    const [cart, setCart] = useState([]);

    function clickHandler() {
        console.log(course.id);
        //logic
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    const  addToCardHandler = (e,courseId) =>{
        e.preventDefault();
        axios.post(
        "http://localhost:9090/api/eLearning/v1/saveToCart",
        {
            courseId: courseId,
            phoneNo: phoneNo,
        }
      ).then((response)=>{
        toast.success(`Added to cart successfully`);
      });
      
      };

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        <div className='flex ml-4 mt-5'>
        <p className='amount'><span className='text-yellow-500'>Amount</span>: $1000</p>
         <button className='addToCart' onClick={(e)=>addToCardHandler(e,course.id)}>Add to cart</button>
        </div>

        <div className='p-4 mt-[-20px]'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
       
    </div>
  )
}

export default Card
