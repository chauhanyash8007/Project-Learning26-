import React from "react";

const MapDemo9 = () => {
  const books = [
    { id: 1, name: "React", category: "Tech", price: 600, rating: 4.7, image: "" },
    { id: 2, name: "Node", category: "Tech", price: 450, rating: 4.3, image: "" },
    { id: 3, name: "Java", category: "Programming", price: 700, rating: 4.8, image: "image" },
    { id: 4, name: "CSS", category: "Design", price: 300, rating: 4.1, image: "" },
    { id: 5, name: "HTML", category: "Web", price: 250, rating: 4.0, image: "image" }
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>Book</th><th>Category</th>
          <th>Price</th><th>Rating</th><th>Cover</th>
        </tr>
      </thead>
      <tbody>
        {books.map(b => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.name}</td>
            <td style={{ background: b.category === "Tech" ? "#ffe0b2" : "" }}>{b.category}</td>
            <td style={{ color: b.price > 500 ? "red" : "green" }}>{b.price}</td>
            <td>{b.rating}</td>
            <td>{b.image ? <img src={b.image} alt="image" /> : "Image is missing..."}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MapDemo9;
