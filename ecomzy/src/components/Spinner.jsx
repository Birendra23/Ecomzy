import React from "react";
import "./Spinner.css"
const Spinner = () => {
  return (
    //
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-24 h-24 border-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};
export default Spinner;
