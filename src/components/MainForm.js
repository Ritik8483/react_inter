import React, { useState } from "react";
import InputField from "../reuseables/InputField";
import styles from "../styles/MainForm.module.css";

const inputDesign = {
  height: "40px",
};

const labelStyle = {
  color: "red",
};

const choices = ["text", "password", "email", "radio", "number","select","currency"];       //Array of various input types

const MainForm = () => {
  const [inputField, setInputField] = useState("");     //state for input value
  const [errorMsg, setErrorMsg] = useState("");     //state for error message if field is required
  const [inputType, setInputType] = useState("text");       //state for input type
  const [disableInputField, setDisableInputField] = useState(false);    //state for disabling the input
  const [error, setError] = useState(false);        //error state
  const [requireInputField, setRequireInputField] = useState(false);
  const [usersArr, setUsersArr] = useState([]);     //users collection
  const [selectOptions, setSelectOptions] = useState([]);     //users collection
  const handleOnChange = (e) => {
    setInputField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputType !== "text") return;

    if (requireInputField) {
      if (!inputField.length) {
        setError(true)
        setErrorMsg("It is required");
      } else {
        setUsersArr((prev) => [...prev, inputField]);
        setInputField("");
      }
    } else {
      setUsersArr((prev) => [...prev, inputField]);
      setInputField("");
    }
  };

  const handleChoice = (item) => {
    setInputType(item);
    if(item==="select"){
        const a = window.prompt("Option 1")
        const b = window.prompt("Option 2")
        const c = window.prompt("Option 3")
        const d = window.prompt("Option 4")
        const arr = [a,b,c,d]
        setSelectOptions(arr)
    }
    else if(item==="currency"){
        alert("This input type ")
    }
  };

  const handleEdit = (data) => {
    setInputField(data);
  };

  const handleDisable = (data) => {
    setInputField(data);
    setDisableInputField(true);
  };

  console.log(inputField);

  return (
    <div className={styles.mainBox}>
      <div className={styles.childBox}>
        Choose a Input
        {choices.map((item) => {
          console.log("item", item);
          return (
            <button key={item} onClick={() => handleChoice(item)}>
              {item}
            </button>
          );
        })}
      </div>

      <form style={{ marginTop: "40px" }} onSubmit={handleSubmit}>
        <InputField
          onChange={handleOnChange}
          value={inputField}
          label="Enter Name"
          selectOptions={selectOptions}
          name="name"
          selectedType={inputType}
          inputStyle={inputDesign}
          id="name"
          disable={disableInputField}
          labelStyle={labelStyle}
          required={requireInputField}
          placeholder="Enter name"
          maxLength={50}
          minLength={3}
          error={error}
          errorMessage={errorMsg}
        />
        <button disabled={inputType !== "text"} type="submit">
          Create
        </button>
        <button
          disabled={inputType !== "text"}
          type="button"
          onClick={() => setRequireInputField(!requireInputField)}
        >
          {requireInputField ? "Not Required" : "Required"}
        </button>
        <p>Note : the input InpuField is note required initially , will be required once cliced</p>
      </form>

      <h3>Users Table</h3>
      <table>
        <tr>
          <th>S. No</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Disable</th>
        </tr>
        {usersArr.map((item, index) => {
          return (
            <tr key={index + item}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDisable(item)}>Disable</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MainForm;
