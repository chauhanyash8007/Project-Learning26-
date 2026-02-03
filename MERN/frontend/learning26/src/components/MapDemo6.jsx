import React from "react";

export const MapDemo6 = () => {
  const cars = [
    { id: 1, name: "Creta", category: "SUV", price: 55000, rating: 4.6, image: "https://www.mercedes-benz.co.in/content/dam/hq/passengercars/cars/bodytypes-landingpages/suv/modeloverview/07-2023/images/mercedes-benz-suv-landingpage-modeloverview-696x392-07-2023.png" },
    { id: 2, name: "Swift", category: "Hatchback", price: 30000, rating: 4.2, image: "" },
    { id: 3, name: "XUV700", category: "SUV", price: 70000, rating: 4.8, image: "https://etimg.etb2bimg.com/thumb/msid-111612815,imgsize-1155292,width-1200,height=627,overlay-etauto,resizemode-75/passenger-vehicle/mahindra-launches-temporarily-pricing-of-xuv700-ax7-range-starting-at-inr-19-49-lakh.jpg" },
    { id: 4, name: "City", category: "Sedan", price: 48000, rating: 4.4, image: "" },
    { id: 5, name: "Thar", category: "SUV", price: 65000, rating: 4.7, image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-left-front-three-quarter-3.jpeg?isig=0&q=80" }
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
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
            <td>{car.name}</td>
            <td style={{ color: car.category === "SUV" ? "blue" : "black" }}>
              {car.category}
            </td>
            <td style={{ color: car.price > 50000 ? "red" : "green" }}>
              ₹{car.price}
            </td>
            <td style={{ fontWeight: car.rating >= 4.5 ? "bold" : "normal" }}>
              {car.rating}
            </td>
            <td>
              {car.image ? (
                <img style={{height:"200px"}}src={car.image} alt="car" />
              ) : (
                <span style={{ color: "gray" }}>Image is missing...</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

