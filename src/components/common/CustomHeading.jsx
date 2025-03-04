import React from "react";

const CustomHeading = ({ text, myClass }) => {
  return (
    <h2 className={`${myClass} font-franklin text-3xl custom-blue text-center custom-heading-font`}>
      {text}
    </h2>
  );
};

export default CustomHeading;
