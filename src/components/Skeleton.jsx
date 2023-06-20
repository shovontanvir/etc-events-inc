import React from "react";

const Skeleton = (props) => {
  return <div className={`px-36 ${props.className}`}>{props.children}</div>;
};

export default Skeleton;
