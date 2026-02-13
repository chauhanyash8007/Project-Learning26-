import React from "react";
import { useForm } from "react-hook-form";

const FormSix = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    alert("Form Submitted Successfully ✅");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>7 Basic Form Validations</h2>

      {/* 1. Required */}
      <input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: "Username is required",
        })}
      />
      <p>{errors.username?.message}</p>

      {/* 2. Min Length */}
      <input
        type="text"
        placeholder="First Name"
        {...register("firstName", {
          minLength: {
            value: 3,
            message: "Minimum 3 characters",
          },
        })}
      />
      <p>{errors.firstName?.message}</p>

      {/* 3. Max Length */}
      <input
        type="text"
        placeholder="Last Name"
        {...register("lastName", {
          maxLength: {
            value: 8,
            message: "Maximum 8 characters",
          },
        })}
      />
      <p>{errors.lastName?.message}</p>

      {/* 4. Email Format */}
      <input
        type="text"
        placeholder="Email"
        {...register("email", {
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      <p>{errors.email?.message}</p>

      {/* 5. Min Value */}
      <input
        type="number"
        placeholder="Age"
        {...register("age", {
          min: {
            value: 18,
            message: "Minimum age is 18",
          },
        })}
      />
      <p>{errors.age?.message}</p>

      {/* 6. Max Value */}
      <input
        type="number"
        placeholder="Experience (years)"
        {...register("experience", {
          max: {
            value: 40,
            message: "Maximum experience is 40",
          },
        })}
      />
      <p>{errors.experience?.message}</p>

      {/* 7. Confirm Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
        })}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", {
          validate: (value) =>
            value === password || "Passwords do not match",
        })}
      />
      <p>{errors.confirmPassword?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormSix;
