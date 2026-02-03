import React from "react";

const MapDemo10 = () => {
  const employees = [
    { id: 1, name: "Rahul", category: "IT", price: 70000, rating: 4.6, image: "" },
    { id: 2, name: "Anita", category: "HR", price: 45000, rating: 4.1, image: "" },
    { id: 3, name: "Suresh", category: "IT", price: 80000, rating: 4.8, image: "image" },
    { id: 4, name: "Meena", category: "Finance", price: 50000, rating: 4.3, image: "" },
    { id: 5, name: "Vikas", category: "IT", price: 65000, rating: 4.5, image: "" }
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Dept</th>
          <th>Salary</th><th>Rating</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(e => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td style={{ color: e.category === "IT" ? "blue" : "black" }}>{e.category}</td>
            <td style={{ fontWeight: e.price > 60000 ? "bold" : "normal" }}>{e.price}</td>
            <td style={{ color: e.rating >= 4.5 ? "green" : "red" }}>{e.rating}</td>
            <td>{e.image ? <img src={e.image} alt="image" /> : "Image is missing..."}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapDemo10;
