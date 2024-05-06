import React from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";

export default function EmptyCart() {
  return (
    <div>
<div style={{marginLeft:"200px"}}><MdRemoveShoppingCart color="white" fontSize="5rem"/> </div>
<h1 className='enptyCart'>Explore our courses to improve your skill</h1>
    </div>
  )
}
