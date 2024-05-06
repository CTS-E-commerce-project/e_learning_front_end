import React from 'react';
import { MdRemoveShoppingCart } from "react-icons/md";

export default function EmptyCart() {
  return (
    <div>
<MdRemoveShoppingCart color="#F8AA5C" fontSize="5rem"/> 
<h1 className='enptyCart'>Empty Cart</h1>
    </div>
  )
}
