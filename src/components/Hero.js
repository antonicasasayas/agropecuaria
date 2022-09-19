import React from "react";
import farmer from "../images/farmer-holding-box.png";
import { BsArrowUpRight } from 'react-icons/bs'
const Hero = () => {
  return (
    <div className="mt-8 text-white mb-56 ">
      <h1 className="mt-12 font-germalt-bold-it tracking-wide text-5xl">
        Collida diàriament del camp a taula
      </h1>
      <div className="w-68 mt-4  h-12 border-t-4 rounded-tl-huge rounded-tr-massive border-t-mustard border-transparent "></div>
      <p className="font-roboto-light text-sm tracking-wide leading-7">
        A les Arnaules trobaràs verdura de la millor qualitat cultivada per la
        família Casasayas. Fa més de 50 anys que treballem la terra i ens agrada
        molt allò que fem.{" "}
      </p>
      <div className="flex  ">
        <button className="bg-white mr-6 my-8 text-lg rounded-md px-8 font-roboto-bold py-3 tracking-wide text-gray-800">
          Contactar
        </button>
        <button className="flex text-lg items-center space-x-2.5">
          <span>Més Informació</span>
          <BsArrowUpRight />
        </button>
      </div>

     
        <img
          src={farmer}
          className="absolute  bg-background left-0 w-screen object-contain"
          alt="farmer"
        />
     
    </div>
  );
};

export default Hero;
