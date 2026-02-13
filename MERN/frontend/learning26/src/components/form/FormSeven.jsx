import React from "react";
import { useForm } from "react-hook-form";

const PasswordForm = () => {
  const { register, watch } = useForm();

  const password = watch("password", "");

  // Validation checks
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);
  const hasLength = password.length >= 8;

  const getColor = (condition) => (condition ? "green" : "black");

  return (
    <div>
      <h2>Password Validation Form</h2>

      <input
        type="password"
        placeholder="Enter Password"
        {...register("password")}
      />

      <div style={{ marginTop: "10px" }}>
        <p style={{ color: getColor(hasUpper) }}>✔ 1 Capital character</p>
        <p style={{ color: getColor(hasLower) }}>✔ 1 Small character</p>
        <p style={{ color: getColor(hasDigit) }}>✔ 1 Digit</p>
        <p style={{ color: getColor(hasSpecial) }}>✔ 1 Special character</p>
        <p style={{ color: getColor(hasLength) }}>✔ Minimum 8 characters</p>
      </div>
    </div>
  );
};

export default PasswordForm;
