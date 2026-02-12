import React, { useState } from "react";

const FormFive = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    role: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!data.username) err.username = "Username is required";

    if (!data.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      err.email = "Invalid email";

    if (!data.password) err.password = "Password is required";
    else if (data.password.length < 6)
      err.password = "Password must be at least 6 characters";

    if (!data.mobile) err.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(data.mobile))
      err.mobile = "Mobile must be 10 digits";

    if (!data.role) err.role = "Role is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form 5 submitted successfully ✅");
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Form Five (Login)</h2>

      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <p>{errors.username}</p>

        <input name="email" placeholder="Email" onChange={handleChange} />
        <p>{errors.email}</p>

        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <p>{errors.password}</p>

        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
        <p>{errors.mobile}</p>

        <input name="role" placeholder="Role" onChange={handleChange} />
        <p>{errors.role}</p>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default FormFive;
