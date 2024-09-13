import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import resume from "/Yash_Resume.pdf"

const Banner = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","Backend Developer","Full Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop:true
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url(/banner_wallpaper.svg)",
        backgroundSize: "cover",
      }}
      className="md:flex items-center h-96" id="home"
    >
      <div className="w-full flex items-center justify-center">
        <div className="md:w-2/3 mt-7 md:mt-0 text-white text-center md:text-start">
          <h3 className="text-2xl font-semibold">Hi, I am</h3>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold">Yash Kumar</h1>
          <h2 className="mt-2 md:text-2xl text-xl">And I am a <span className="font-bold" ref={el}></span></h2>
          <p className="mt-2 text-sm md:text-base mx-7 md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit
            dolorem libero reiciendis in voluptates. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita, culpa odit nam sunt hic at!
          </p>
          <div className="space-x-5 flex mt-2 justify-center md:justify-start">
            <a className="hover:bg-gray-500 cursor-pointer px-2 py-2 w-11 h-11 bg-gray-800 flex rounded-full justify-center items-center" href="https://www.linkedin.com/in/yash3535/" target="_blank">
            <i className="fa-brands text-3xl fa-linkedin"></i>
            </a>
            <a className="hover:bg-gray-500 cursor-pointer px-2 py-2 w-11 h-11 bg-gray-800 flex rounded-full justify-center items-center" href="https://www.github.com/ygarg3535" target="_blank">
            <i className="fa-brands text-3xl fa-github"></i>
            </a>
          
          </div>
          <div className="mt-6">
          <a
            className="px-4 py-2 bg-orange-500 rounded-full shadow-lg"
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGCSXzzjglKsTtxfzLMKTpRbtQNKrXGwBvgRpxjhTQGsshnJhXfkFrfgQXqbRPmTnpfdM" target="_blank"
          >
            Contact Me
          </a>
          <a
            className="px-4 py-2 ml-4 bg-orange-500 rounded-full shadow-lg md:hidden"
            href={resume} download="Resume"
          >
            Download CV
          </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-24 md:mt-0">
        <img
          className="md:w-80 md:h-80 w-64 h-64 rounded-full shadow-lg"
          src="/profile_img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
