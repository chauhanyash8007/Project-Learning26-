import React, { useState } from "react";
import StudentForm from "./StudentForm";
import ReusableTable from "./ReusableTable";

const StudentPage = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    setStudents([...students, studentData]);
  };

  const headers = [
    "Name",
    "Age",
    "Email",
    "Password",
    "Mobile",
    "Address",
    "City",
    "State",
    "Country",
    "Course",
  ];

  return (
    <>
      <StudentForm addStudent={addStudent} />
      <ReusableTable headers={headers} data={students} />
    </>
  );
};

export default StudentPage;
