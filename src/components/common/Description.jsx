import React from "react";

const Description = ({ myClass, text }) => {
    return (
      <p className={`${myClass} fw-6 custom-light-blue text-xs lh-sm`}>
        {text}
      </p>
    );
};

export default Description;
