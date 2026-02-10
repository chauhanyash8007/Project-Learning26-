import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      name: "",
      age: "",
      email: "",
      password: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      country: "",
      course: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Form</h2>

      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
      <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} /><br />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} /><br />
      <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} /><br />
      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} /><br />
      <input name="city" placeholder="City" value={formData.city} onChange={handleChange} /><br />
      <input name="state" placeholder="State" value={formData.state} onChange={handleChange} /><br />
      <input name="country" placeholder="Country" value={formData.country} onChange={handleChange} /><br />
      <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} /><br />

      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
