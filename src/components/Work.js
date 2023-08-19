import { icons, images } from "../data/Data";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="relative p-10 text-center ">
        <h1 className="mb-8 text-2xl font-bold">WHAT WE DO</h1>
        <div className="grid grid-cols-3 gap-4 mx-auto mb-10">
          {icons.services_icons.map((link, index) => (
            <div className="flex flex-col items-center" key={index}> {/* Added flex classes */}
              <img
                src={link.imageurl}
                alt=""
                className="w-24 h-24 mb-1 rounded-xl"
              />
              <p className="text-center">{link.description}</p>
            </div>
          ))}
        </div>

        <h1 className="mb-4 text-2xl font-bold">PORTFOLIO</h1>
        <div className="grid grid-cols-4 gap-2 mx-auto mb-10 xl:pr-96 xl:pl-96 2xl:pr-96 2xl:pl-96 lg:pr-96 lg:pl-96 sm:pr-36 sm:pl-36 md:pr-36 pr-36 pl-36">
          {images.product_image.map((link, index) => (
            <img
              src={link.portfolioimage}
              alt=""
              key={index}
              className="lg:w-4/5 lg:h-4/5 mb-5 place-self-center rounded-2xl"
            />
          ))}
        </div>
    </div>
  );
};

export default Work;
