"use client";

import { forwardRef, useId } from "react";

const TextareaInput = forwardRef(function TextareaInput(
  { label, className = "sm:col-span-2", ...props },
  ref,
) {
  const id = useId;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
      >
        {label}
      </label>
      <div className="mt-2">
        <textarea
          {...props}
          ref={ref}
          rows={3}
          className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
          placeholder={`Type the ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );
});

export default TextareaInput;
