import axios from "axios";
import React, { useState } from "react";

export const ApiDemoOne = () => {
  const [products, setProducts] = useState([]);

  const getProductData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data.products); 
    setProducts(response.data.products);
    
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO One</h1>
      <button
        onClick={() => {
          getProductData();
        }}
      >
        GET
      </button>
      <table border="2" align="center">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
