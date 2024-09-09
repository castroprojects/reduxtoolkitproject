import React, { useState } from "react";
import {  useDispatch } from 'react-redux'
import { addToCart } from "../features/todo/todoSlice";
import {Content} from "../content"

function ImageOption() {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
    

    return (
    <>

      
        <div className='images'>
          {Content.map((product, index)=>{

              return (
              <>
              
                <div key={product.id} className="image" ><img src={product.itemImage}/><button onClick={() => handleAddToCart(product)}>Rs{product.itemValue}</button></div>

              </>  
          )

          })}
        </div>
    </>
    )

}

export default ImageOption;