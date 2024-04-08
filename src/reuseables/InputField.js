import React from "react";
import styles from "../styles/InpuField.module.css";

const InputField = ({
  onChange,
  id,
  name,
  value,
  placeholder,
  inputStyle,
  selectOptions,
  disable,
  required,
  labelStyle,
  label,
  maxLength,
  minLength,
  errorMessage,
  error,
  selectedType,
}) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label style={labelStyle} key={id}>
          {label}
        </label>

        {selectedType === "select" ? (
          <select placeholder="Select" name="cars" id="cars" form="carform">
            {selectOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={selectedType}
            id={id}
            value={value}
            required={required}
            disabled={disable}
            maxLength={maxLength}
            minLength={minLength}
            labelStyle={labelStyle}
            style={inputStyle}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>

      <p>Selected Type : {selectedType}</p>
      {error && <p>{errorMessage}</p>}
    </>
  );
};

export default InputField;
