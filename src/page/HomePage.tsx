import "aos/dist/aos.css";

import AOS from "aos";
import { CustomButton } from "../components/CustomButton";
import { NavBar } from "../components/NavBar";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header id="home" className=" h-screen min-[768px]:px-[90px] max-[768px]:px-[10px]  ">
      <NavBar />
       <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-screen max-sm:hidden absolute left-0 top-0 z-[-1]"
        >
          <path
            d="M-63.48,-51.78 C149.99,150.00 568.56,196.88 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-[#5e28c2a7] stroke-none z-0"
          ></path>
        </svg>
      <section className="flex relative max-sm:flex-wrap justify-between gap-6 max-lg:justify-center items-center ">
        <article className="max-lg:w-full items-start flex flex-col ">
          <h3
            data-aos="fade"
            className="text-[32px] max-sm:text-2xl text-[#E0E0E0]"
          >
            Juan Daniel Valderrama
          </h3>

          <h1
            data-aos="fade-right"
            translate="no"
            className="max-w-[480px] font-bold md:text-[105px] text-6xl  sm:text-[70px] leading-none mb-[50px]"
          >
            Front End Developer
            <span className="ml-1 text-[#1C9EE7] scale-75 translate-x-4 skew-y-3 text-2xl">
              ▖
            </span>
          </h1>
          <CustomButton text="Previous Projects" />
        </article>

        <img
          className="sm:w-[40%]  w-[80%] animate-flotin"
          src="developer.png"
          alt=""
        />
      </section>
      
    </header>
  );
};
