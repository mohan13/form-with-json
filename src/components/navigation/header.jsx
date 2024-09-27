import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-center mx-auto p-4">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Home
            </Link>
          </li>{" "}
          <li>
            <Link
              to="/login"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/job-form"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Job Form
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Contact
            </Link>
          </li>{" "}
        </ul>
      </div>
    </nav>

    // <div className="flex items-center bg-red-500">
    //   <Link to="login">Login</Link>
    //   <Link to="/contact">Contact</Link>
    // </div>
  );
};
