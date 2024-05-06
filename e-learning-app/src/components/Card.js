import React, { useContext, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import { Context } from "../utills/Context";
import axios from "axios";
import { BsCartCheckFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  const { responseData } = useContext(Context);
  let phoneNo = responseData.phoneNumber;
  const { cartCourses, setCartCourses } = useContext(Context);
  const [cart, setCart] = useState([]);

  function clickHandler() {
    console.log(course.id);
    //logic
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pada tha
      axios.delete(`http://localhost:9090/api/eLearning/v1/removeLikedCourse/${course.id}/${phoneNo}`).then((response)=>{
        setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
        toast.warning("like removed");
       })
      
    } else {
      //pehle se like nahi hai ye course
      //insert karna h ye course liked courses me
      if (likedCourses.length === 0) {
        axios
        .post("http://localhost:9090/api/eLearning/v1/saveLikedCourse", {
          courseId: course.id,
          phoneNo: phoneNo,
        })
        .then((response) => {
            setLikedCourses([course.id]);
        });
      } else {
        //non-empty pehle se
        axios
        .post("http://localhost:9090/api/eLearning/v1/saveLikedCourse", {
          courseId: course.id,
          phoneNo: phoneNo,
        })
        .then((response) => {
            setLikedCourses((prev) => [...prev, course.id]);
        });
      }
      toast.success("Liked Successfully");
    }
  }

  const addToCardHandler = (e, courseId) => {
    e.preventDefault();
    console.log(cartCourses);
    if (!cartCourses.includes(courseId)) {
      setCartCourses((prev) => [...prev, courseId]);
      axios
        .post("http://localhost:9090/api/eLearning/v1/saveToCart", {
          courseId: courseId,
          phoneNo: phoneNo,
        })
        .then((response) => {
          toast.success(`Added to cart successfully`);
        });
    }else{
        let cartItems = cartCourses;
        cartItems = cartItems.filter((item)=>{
            return item!==courseId;
        });
       axios.delete(`http://localhost:9090/api/eLearning/v1/removeCartItem/${courseId}/${phoneNo}`).then((response)=>{
        setCartCourses(cartItems);
        toast.warning(`Removed from cart`);
       })
        
    }
  };

  const addTocartButton = () =>{
    return (<div className="cartButton"><span>Add</span><BsCartCheckFill/></div>) ;
  }
  const removeTocartButton = () =>{
    return (<div className="cartButton"><span>Remove</span><BsCartDashFill /></div>) ;
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image} />

        <div
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="flex ml-4 mt-5">
        <p className="amount">
          <span className="text-yellow-500">Amount</span>: {course.amount}
        </p>
        <button
          className="addToCart"
          onClick={(e) => addToCardHandler(e, course.id)}
        >
          {cartCourses.includes(course.id) ? removeTocartButton() : addTocartButton()}
        </button>
      </div>

      <div className="p-4 mt-[-20px]">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
