import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const ButtonOutline = (props) => {
  return (
    <button className="mr-5 px-16 py-1 bg-transparent border border-emerald-700 rounded-full flex justify-center items-center group hover:bg-emerald-700 transition-all duration-500 ease-linear">
      <span className="pb-2 font-diphylleia text-lg">
        {props.buttonInnerText}
        <FontAwesomeIcon icon={faAnglesRight} className="ml-3" />
      </span>
    </button>
  );
};

export default ButtonOutline;
