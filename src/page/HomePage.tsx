import "aos/dist/aos.css";

import AOS from "aos";
import { CustomButton } from "../components/CustomButton";
import { useEffect } from "react";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <header className="mb-[150px] ">
      <h3 data-aos="fade" className="text-[32px] text-[#E0E0E0]">i`m a</h3>

      <h1 data-aos="fade-right" className="max-w-[480px] min-[370px]:text-[96px] max-[370px]:text-[70px]  leading-none mb-[50px]">
        Full Stack SoftWare Developer
        <span className="ml-1 text-[#1C9EE7] scale-75 translate-x-4 skew-y-3 text-2xl">
          ▖
        </span>
      </h1>

      <CustomButton text="Previous Projects" />
    </header>
  );
};
