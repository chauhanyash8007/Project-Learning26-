import React, { useState } from "react";

const FormThree = () => {
  const [data, setData] = useState({
    rollNo: "",
    studentName: "",
    course: "",
    year: "",
    college: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Form Three</h2>

      <input name="rollNo" placeholder="Roll No" onChange={handleChange} />
      <input name="studentName" placeholder="Student Name" onChange={handleChange} />
      <input name="course" placeholder="Course" onChange={handleChange} />
      <input name="year" placeholder="Year" onChange={handleChange} />
      <input name="college" placeholder="College" onChange={handleChange} />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FormThree;
