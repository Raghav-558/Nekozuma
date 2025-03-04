import React from "react";

const CustomHeading = ({ text, myClass }) => {
  return (
    <h2 className={`${myClass} font-franklin fw-bold text-3xl custom-blue text-center`}>
      {text}
    </h2>
  );
};

export default CustomHeading;
