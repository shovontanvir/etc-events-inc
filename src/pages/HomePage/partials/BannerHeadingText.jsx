import React from "react";
import { MovingComponent } from "react-moving-text";

const BannerHeadingText = (props) => {
  return (
    <h1 className="text-8xl font-bold font-diphylleia mb-5">
      <MovingComponent
        type="shadow"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease-in-out"
        iteration="1"
        fillMode="forwards"
      >
        {props.innerText}
      </MovingComponent>
    </h1>
  );
};

export default BannerHeadingText;
