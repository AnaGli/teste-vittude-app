import React from "react";
import styles from "./Input.module.css";

const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.erro}>{error}</p>}
    </div>
  );
};
export default Input;
