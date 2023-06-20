import React from "react";
import Skeleton from "../../../components/Skeleton";
import Button from "../../../components/Button";
import ButtonOutline from "../../../components/ButtonOutline";
import BannerHeadingText from "./BannerHeadingText";
import BannerSubHeadingText from "./BannerSubHeadingText";

const BannerItem = () => {
  return (
    <section>
      <Skeleton className="h-screen bg-concert bg-cover bg-no-repeat relative flex items-center">
        <div className="flex flex-col justify-center  p-10 z-50 text-white border border-emerald-600 rounded-lg bg-emerald-700 bg-opacity-20">
          <BannerHeadingText innerText="ETC Events Inc." />
          <BannerSubHeadingText innerText="Lorem ipsum dolor set amet" />
          <div className="flex my-7">
            <Button buttonInnerText="Get Quote" />
            <ButtonOutline buttonInnerText="Know Us" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </Skeleton>
    </section>
  );
};

export default BannerItem;
