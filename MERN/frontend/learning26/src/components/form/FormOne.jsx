import React, { useState } from "react";

const FormOne = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    city: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Form One</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <input name="city" placeholder="City" onChange={handleChange} />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FormOne;
