import React from "react";
import { useFormContext } from "react-hook-form";

export const Input = ({ name, label, type, isRequired = true, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message;
  return (
    <div>
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-900"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        type={type || "text"}
        {...register(`${name}`, { required: isRequired })}
        {...props}
      />
      {errors[`${name}`] && (
        <span className="text-sm text-red-600 ">{label} is required</span>
      )}{" "}
    </div>
  );
};
