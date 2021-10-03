import react from "react";
import React, { useState } from "react";
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
      { title: "html", price: "99 $" },
      { title: "css", price: "120 $" },
      { title: "javacript", price: "200 $" },
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
    </div>
  );
};
export default App;
