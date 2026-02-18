import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export const ApiDemo3 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // submit handler
  const submitHandler = async (data) => {
    try {
      const res = await axios.post(
        "https://node5.onrender.com/user/user/",
        data
      );
      console.log(res.data);
      alert("User added successfully");
      reset(); // clear form
    } catch (error) {
      console.log(error);
      alert("Error while adding user");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 3</h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* NAME */}
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        {/* EMAIL */}
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        {/* AGE */}
        <input
          type="number"
          placeholder="Age"
          {...register("age", { required: "Age is required" })}
        />
        <p style={{ color: "red" }}>{errors.age?.message}</p>

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        {/* IS ACTIVE */}
        <label>
          Active
          <input type="checkbox" {...register("isActive")} />
        </label>

        <br /><br />

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
