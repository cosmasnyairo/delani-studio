import React from "react";
import { backgrounds } from "../data/Data";

const Services = () => {
  return (
    <div id="services" className="relative p-10 text-center h-72">
      <img
        id="backgroundImage"
        src={backgrounds.servicebackground}
        className="absolute inset-0 w-full h-72 object-cover"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col mt-10">
        <h1 className="mb-4 text-2xl text-white font-bold">SERVICES</h1>
        <p className="mb-4 font-semibold text-white">
          Before we sign a contract or write a line of code, our team will spend the necessary time needed to understand your product vision.
        </p>
        <p className="mb-4 font-semibold text-white">
          The outcome of this scoping session is a proposal or high-level statement of work.
        </p>
        <p className="mb-4 font-semibold text-white">
          Based on your requirements, we can provide a complete offering or just the pieces you need.
        </p>
      </div>
    </div>
  );
};

export default Services;
