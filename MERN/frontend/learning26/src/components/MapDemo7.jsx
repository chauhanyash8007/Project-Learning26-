import React from "react";

const MapDemo7 = () => {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 80000, rating: 4.6, image: "" },
    { id: 2, name: "Mobile", category: "Electronics", price: 40000, rating: 4.3, image: "image" },
    { id: 3, name: "Tablet", category: "Gadget", price: 30000, rating: 4.1, image: "" },
    { id: 4, name: "Camera", category: "Gadget", price: 60000, rating: 4.7, image: "image" },
    { id: 5, name: "Watch", category: "Accessory", price: 15000, rating: 4.0, image: "" }
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Category</th>
          <th>Price</th><th>Rating</th><th>Image</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td style={{ backgroundColor: p.category === "Electronics" ? "#e0f7fa" : "white" }}>
              {p.category}
            </td>
            <td style={{ color: p.price > 50000 ? "red" : "green" }}>
              ₹{p.price}
            </td>
            <td style={{ color: p.rating >= 4.5 ? "green" : "black" }}>
              {p.rating}
            </td>
            <td>
              {p.image ? <img src={p.image} alt="item" /> : <b>Image is missing...</b>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapDemo7;
