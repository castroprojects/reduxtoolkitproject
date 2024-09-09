import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    addToCart,
    decreaseCart,
    getTotals,
  } from '../features/todo/todoSlice';

  

import { NavLink } from "react-router-dom";

function ItemsBar() {

  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const {cartTotalAmount} = useSelector((state) => state);
  
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  

    return (
    <> 
       <div className=" flex justify-center wrap">
            <div className="w-full bg-white rounded-lg shadow-md p-6">

                <h2 className="text-2xl font-semibold mb-6 text-center">Shopping Cart</h2>

                
                <div className="cardAdder mb-4">
                    
                    {cartItems&&
                        cartItems.map((cartItem) => {
                                
                                return (
                                <>
                                    <div className="flex items-center justify-between mb-6" key={cartItem.id}>
                                        <div className="listItem flex flex-row items-center">
                                            <img src={cartItem.itemImage} className="imagess" />
                                            <div className="ml-4">
                                                <h3 className="text-lg font-semibold"> ${cartItem.itemValue}</h3>
                                            </div>
                                            <div className="ml-4">
                                                <p className="text-gray-600"><button onClick={() => handleAddToCart(cartItem)}>+</button>{cartItem.cartQuantity}<button onClick={() => handleDecreaseCart(cartItem)}>-</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                
                                )
                            })}
                    <div className="totalBox flex justify-center align-middle">
                        <div className="w-full md:w-1/3 h-[10vh] bg-gray-100 rounded-lg p-4">
                        
                             <div className="flex  justify-between text-center font-semibold border-t border-gray-300 pt-2 pl-2">
                                <span>${cartTotalAmount}</span>
                                <button>
                                <NavLink
                                to="/payment"
                                    
                            
                                >
                                    Checkout
                                </NavLink></button>
                            </div>
                            
                        </div>
                    </div>
                        
                </div>
                
            </div>
        </div>

    </>
    )

}

export default ItemsBar;