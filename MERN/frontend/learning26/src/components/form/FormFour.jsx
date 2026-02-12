import React, { useState } from "react";

const FormFour = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    city: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!data.name) err.name = "Name is required";
    if (!data.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      err.email = "Invalid email format";

    if (!data.password) err.password = "Password is required";
    else if (data.password.length < 6)
      err.password = "Password must be at least 6 characters";

    if (!data.age) err.age = "Age is required";
    else if (isNaN(data.age) || data.age < 18)
      err.age = "Age must be 18 or above";

    if (!data.city) err.city = "City is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form 4 submitted successfully ✅");
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Form Four (Signup)</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <p>{errors.name}</p>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <p>{errors.email}</p>

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <p>{errors.password}</p>

        <input name="age" placeholder="Age" onChange={handleChange} />
        <p>{errors.age}</p>

        <input name="city" placeholder="City" onChange={handleChange} />
        <p>{errors.city}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormFour;
