import { FIRST_SLIDER_LIST, SECOND_SLIDER_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const MySlider = () => {
  return (
    <div id="overview">
      <Marquee direction="left">
        {FIRST_SLIDER_LIST.map((obj, i) => (
          <Image
            key={i}
            height={320}
            width={320}
            src={obj.image}
            alt={obj.alt}
            className="pe-none slider-image-size"
          />
        ))}
      </Marquee>
      <Marquee direction="right">
        {SECOND_SLIDER_LIST.map((obj, i) => (
          <Image
            key={i}
            height={320}
            width={320}
            src={obj.image}
            alt={obj.alt}
            className="pe-none slider-image-size"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default MySlider;
