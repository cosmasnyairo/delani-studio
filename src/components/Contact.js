import React from "react";
import { backgrounds } from "../data/Data";

const Contact = () => {
  return (
    <div id="contact" className="relative p-10 text-center h-screen">
      <img
        id="backgroundImage"
        src={backgrounds.contactbackground}
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />
      <div className=" absolute inset-0 flex flex-col items-center justify-center text-center h-full">
        <h2 className="text-2xl font-bold mb-5 ">CONTACT US</h2>
        <form className="bg-white w-4/5 p-10 rounded-xl">
          <div className="mb-4">
            <label htmlFor="name" className=""> Name </label>
            <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Name" required="true"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className=""> Email </label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Email" required="true"/>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className=""> Message </label>
            <textarea type="message" id="message" name="message" rows="7" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Your message here" required="true"/>
          </div>
          <button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
