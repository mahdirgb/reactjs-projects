import React from "react";

const Product = (props) => {
    console.log(props)
  return (
    <div className="container" id="title">
        <h1> {props.name}  {props.price} </h1>
        <p>{props.children}</p>
    </div>
  );
};
export default Product;