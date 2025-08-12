import React from "react";
import {useState} from "react"

function Item({ name, category }) {

  const [notInCart, inCart]= useState(false)
  const cart = notInCart ? "in-cart" : ""
  const buttonEffect = notInCart ? "remove" : "add"
  const buttonText = notInCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonEffect} onClick={() => inCart(!notInCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
