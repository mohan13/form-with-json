/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Input from "./Input";
import TextareaInput from "./TextAreaInput";
import Select from "./Select";

export const Form = ({ schema, onSubmit }) => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    phone: "",
    message: "",
    programming: [],
    gender: "",
    resume: null,
  });
  const handleChange = (e) => {
    const { name, value, options, files } = e.target;
    if (e.target.type === "select-multiple") {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);
      setUserData({ ...userData, [name]: selectedValues });
    } else if (e.target.type === "file") {
      setUserData({ ...userData, [name]: files[0] });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 grid-cols-3">
        {schema.fields.map((item) => {
          switch (item.type) {
            case "text":
            case "number":
            case "password":
            case "email":
              return (
                <Input
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={handleChange}
                />
              );
            case "textarea":
              return (
                <TextareaInput
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={handleChange}
                />
              );
            case "file":
              return (
                <Input
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={handleChange}
                  accept=".pdf" // Accept only PDF files onChange=
                />
              );
            case "select":
              return (
                <Select
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  options={item.options}
                  multiple={item.multiple}
                  onChange={handleChange}
                />
              );

            default:
              return null;
          }
        })}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
