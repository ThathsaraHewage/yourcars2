"use client";

import Image from "next/image";
import Custom_Button from "./Custom_Button";

const Head = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Take a look,
          <br /> Explore - <br />
          Buy your dream car
        </h1>
        <p className="hero__subtitle">
          New and used cars with better condition in Sri Lanka
        </p>
        <Custom_Button
          btnType="button"
          title="Click Here To Explore Cars"
          containerStyle="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-800 hover:border-transparent rounded mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="head car"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Head;
