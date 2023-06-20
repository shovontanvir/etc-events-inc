import React from "react";
import { MovingComponent } from "react-moving-text";

const BannerSubHeadingText = (props) => {
  return (
    <h2 className="text-5xl font-josefin font-light">
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
    </h2>
  );
};

export default BannerSubHeadingText;
