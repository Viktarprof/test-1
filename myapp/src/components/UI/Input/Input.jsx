import React from "react";
import s from "./Input.module.css";

function Input({
  type,
  title_input,
  name,
  value,
  styles,
  register,
  id,
  error,
  required
}) {
  const errorMessage = error ? (error.type === "required" || error.type === "pattern" ? error.message : required) : "";

  return (
    <div className={s.input_container}>
      <p className={s.title_input}>{title_input}</p>
      <div className={`${error ? s.errorInputCart : s.inputCart}`}>
        <input
          type={type}
          className={`${s[styles]} ${error ? s.error : ""}`}
          name={name}
          value={value}
          {...register(name)}
        />
        {error && <p className={s.errorMessage}>{errorMessage}</p>}
        <label>{id}</label>
      </div>
    </div>
  );
}
export default Input;
