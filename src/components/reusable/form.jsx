/* eslint-disable react/prop-types */
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "./input";
import TextareaInput from "./TextAreaInput";

export const Form = ({ schema, onChange, onSubmit }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {schema.fields.map((item) => {
            switch (item.type) {
              case "text":
              case "password":
              case "email":
                return (
                  <Input
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type}
                    isRequired="true"
                  />
                );
              case "textarea":
                return (
                  <TextareaInput
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type}
                    isRequired="true"
                  />
                );
              case "file":
                return (
                  <Input
                    key={item.id}
                    label={item.label}
                    name={item.name}
                    placeholder={item.placeholder}
                    type={item.type}
                    isRequired="true"
                    accept=".pdf" // Accept only PDF files onChange=
                    onChange={onChange}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
