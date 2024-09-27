/* eslint-disable react/prop-types */
import React, { useState } from "react";

export const Form = ({ schema, onSubmit }) => {
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
    message: "",
    resume: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setUserData((prevState) => ({
        ...prevState,
        resume: file, // Store the actual file object
      }));
    } else {
      alert("Please upload a valid PDF file.");
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
          return (
            <div key={item.id}>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor={item.id}
              >
                {item.label}
              </label>
              <input
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                onChange={handleChange}
              />

              {/* {(item.type === "file") &
              (
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  label={item.label}
                  name={item.name}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={handleFileChange}
                  accept=".pdf" // Accept only PDF files onChange=
                />
              )} */}

              {item.type === "textarea" && (
                <div>
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
                  >
                    {item.label}
                  </label>
                  <div className="mt-2">
                    <textarea
                      label={item.label}
                      name={item.name}
                      placeholder={item.placeholder}
                      type={item.type}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* {schema.fields.map((item) => {
          switch (item.type) {
            case "text":
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
            default:
              return null;
          }
        })} */}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
