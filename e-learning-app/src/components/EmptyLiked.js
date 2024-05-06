import React from 'react'
import { IoIosHeartDislike } from "react-icons/io";
export default function EmptyLiked() {
  return (
    <div>
        <div style={{marginLeft:'140px'}}><IoIosHeartDislike color="white" fontSize="5rem"/></div>
        <h1 className='enptyCart'>Oops you haven't liked any course</h1>
    </div>
  )
}
