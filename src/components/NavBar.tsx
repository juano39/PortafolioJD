import { CustomButton } from "./CustomButton";
import { useState } from "react";

export const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const hanldeHaburger = () => setToggle(!toggle);
  return (
    <nav className="w-full relative mx-auto sm mb-[80px] z-10  font-bold flex flex-wrap justify-between items-center ">
      <h3>
        <img src="logonav.png" />
      </h3>

      <section
        className={`flex ${
          toggle ?"max-sm:animate-navbarCancel" :  "opacity-0"
        } max-sm:bg-black max-sm:py-14 max-sm:fixed max-sm:w-[50vw] max-sm:h-screen  max-sm:text-2xl  top-0 right-0  justify-between items-center  uppercase max-sm:flex-col max-sm:gap-y-4 sm:flex-wrap gap-x-[35px]`}
      >
        <a onClick={hanldeHaburger} href="#home">home</a>
        <a onClick={hanldeHaburger} href="#about">about me</a>
        <a onClick={hanldeHaburger} href="#portfolio">portfolio</a>
        <a onClick={hanldeHaburger} href="#services">services</a>
        <a onClick={hanldeHaburger} href="#experence">SKILLS</a>
      </section>
      <div
        onClick={hanldeHaburger}
        className="sm:hidden w-12 h-12 cursor-pointer fixed right-[2PX] top-6 "
      >
        <span
          className={`w-[80%] mb-3 ${
            toggle ? "animate-topLine" : " "
          } h-[2px]  bg-white mb-2 rounded-md block`}
        ></span>
        <span
          className={`w-[80%] mb-3 ${
            toggle ? "animate-middleLine" : ""
          } h-[2px]  bg-white mb-2 rounded-md block`}
        ></span>
        <span
          className={`w-[80%] ${
            toggle ? "animate-bottomLine" : ""
          } h-[2px]  bg-white mb-2 rounded-md block`}
        ></span>
      </div>

      <CustomButton classStyle="" text="Contacto" />
    </nav>
  );
};
