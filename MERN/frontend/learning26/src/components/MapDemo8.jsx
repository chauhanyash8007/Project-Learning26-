import React from "react";

const MapDemo8 = () => {
  const students = [
    { id: 1, name: "Amit", category: "A", price: 90, rating: 4.8, image: "" },
    { id: 2, name: "Neha", category: "B", price: 75, rating: 4.2, image: "image" },
    { id: 3, name: "Ravi", category: "A", price: 88, rating: 4.6, image: "" },
    { id: 4, name: "Pooja", category: "C", price: 60, rating: 3.9, image: "" },
    { id: 5, name: "Karan", category: "B", price: 82, rating: 4.4, image: "image" }
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>Name</th><th>Grade</th>
          <th>Marks</th><th>Rating</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td style={{ color: s.category === "A" ? "green" : "orange" }}>{s.category}</td>
            <td style={{ fontWeight: s.price > 80 ? "bold" : "normal" }}>{s.price}</td>
            <td style={{ color: s.rating >= 4.5 ? "blue" : "black" }}>{s.rating}</td>
            <td>{s.image ? <img src={s.image} alt="image" /> : "Image is missing..."}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapDemo8;
