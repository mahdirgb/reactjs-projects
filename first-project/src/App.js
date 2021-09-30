import React from "react";
import Product from "./components/Product/Product";
const App = () => {
  return (
    <div className="container" id="title">
      <h1>mahdi</h1>
        <Product name="reactjs" price="100 $" />
        <Product name="nodejs"  price="250 $" />
        <Product name="vuejs" price="40 $">
          <p>discout is 15%</p>
          </Product>
    </div>
  );
};
export default App;