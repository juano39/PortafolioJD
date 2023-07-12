import "aos/dist/aos.css";

import AOS from "aos";
import { CustomButton } from "../components/CustomButton";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header id="home" className="mb-[150px] ">
      <section className="flex flex-wrap lg:justify-between gap-6 max-lg:justify-center items-center ">
        <article className="max-lg:w-full flex flex-col max-lg:items-center">
          <h3 data-aos="fade" className="text-[32px] text-[#E0E0E0]">
            Juan Daniel Valderrama
          </h3>

          <h1
            data-aos="fade-right"
            className="max-w-[480px] font-bold md:text-[105px] text-5xl  sm:text-[70px] leading-none mb-[50px]"
          >
            Front End Developer
            <span className="ml-1 text-[#1C9EE7] scale-75 translate-x-4 skew-y-3 text-2xl">
              ▖
            </span>
          </h1>
          <CustomButton text="Previous Projects" />
        </article>
        <img className="w-[40%]" src="developer.png" alt="" />
      </section>
    </header>
  );
};
