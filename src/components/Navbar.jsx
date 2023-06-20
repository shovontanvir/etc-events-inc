import React from "react";
import logo from "../assets/images/etc-logo-compressed.png";
import Menu from "./Menu";
import Skeleton from "./Skeleton";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen flex justify-center fixed z-50">
        <Skeleton>
          <Menu />
          <div className="bg-zinc-400 rounded-b-full px-20 py-5 max-h-24 flex justify-between items-center">
            <div className="h-full">
              <img
                src={logo}
                alt="ETC Events Inc."
                className="h-full scale-125 aspect-video"
              />
            </div>
            <div>
              <h1 className="font-diphylleia ml-4 text-lg">+880123456789</h1>
              <h1 className="font-diphylleia ml-4 text-lg">
                etceventsinc@etc.com
              </h1>
            </div>
          </div>
        </Skeleton>
      </nav>
    </>
  );
};

export default Navbar;
