import React from "react";

const Input = ({ width, placeholder }) => {
  return (
    <div className={width}>
      <div className="flex items-center w-full h-9 rounded focus-within:shadow-lg bg-white overflow-hidden">
        <input
          className="peer px-4 h-full outline-none text-sm text-gray-700 w-full"
          type="text"
          id="search"
          placeholder={placeholder}
        />

        <div className="grid place-items-center h-full w-12 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Input;
