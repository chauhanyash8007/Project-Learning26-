import React, { useState } from "react";

const FormTwo = () => {
  const [data, setData] = useState({
    empId: "",
    empName: "",
    department: "",
    salary: "",
    experience: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Form Two</h2>

      <input name="empId" placeholder="Employee ID" onChange={handleChange} />
      <input name="empName" placeholder="Employee Name" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="salary" placeholder="Salary" onChange={handleChange} />
      <input name="experience" placeholder="Experience" onChange={handleChange} />

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FormTwo;
