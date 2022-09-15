import React from 'react'
import farmer from '../images/farmer-holding-box(1).webp'
const Hero = () => {
  return (
    <div className="mt-8 text-white">
      <h1 className="font-dancing text-6xl">
        Collida diàriament del camp a taula
      </h1>
      <div className="w-68 mt-4  h-12 border-t-4 rounded-tl-huge rounded-tr-massive border-t-mustard border-transparent "></div>
      <p className="font-roboto-light tracking-wide leading-7">
        A les Arnaules trobaràs verdura de la millor qualitat cultivada per la
        família Casasayas. Fa més de 50 anys que treballem la terra i ens agrada
        molt allò que fem.{" "}
          </p>
          <button className='bg-white my-8 text-lg rounded-md px-8 font-roboto-bold py-3 tracking-wide text-black'>Contactar</button>
          <img src={farmer} alt="farmer" />
    </div>
  );
}

export default Hero