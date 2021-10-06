import React, { useState } from "react";
import CounterClass from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookObject from "./components/HookObject";
import Product from "./components/Product/Product";
// class App extends react.Component {
//    state = {
//     Products : [
//       {title: "vuejs" , price: "99 $"},
//       {title: "nodejs" , price: "120 $"},
//       {title: "reactjs" , price: "150 $"}
//     ]
//   };
//   clickhandler = () =>{
//     this.setState({
//       Products : [
//         {title: "html" , price: "79 $"},
//         {title: "css" , price: "89 $"},
//         {title: "javascript" , price: "99 $"}
//       ]
//     })
//   }
//  render(){
//   return (
//     <div className="container" id="title">
//       <h1>mahdi</h1>
//       {this.state.Products.map(product => {
//         return <Product
//         name={product.title}
//         price={product.price} />
//       })}
//       <button type="button" onClick={this.clickhandler}>change</button>
//     </div>
//   )
//  }
// };

const App = () => {
  const [Products, setProducts] = useState([
    { title: "vuejs", price: "99 $" },
    { title: "nodejs", price: "120 $" },
    { title: "reactjs", price: "150 $" },
  ]);
  const clickHandler = () => {
    setProducts([
      { title: "html", price: "199 $" },
      { title: "css", price: "259 $" },
      { title: "javacript", price: "299 $" },
    ]);
  };
  return (
    <div className="container" id="title">
      <h1>mahdi</h1>
      {Products.map((product) => {
        return <Product name={product.title} price={product.price} />;
      })}
      <button type="button" onClick={clickHandler}>
        change
      </button>
      <CounterClass/>
      <HookObject/>
    </div>
  );
};
export default App;