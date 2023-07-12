import { CustomButton } from "./CustomButton";

export const NavBar = () => {
  return (
    <nav className="w-full mx-auto mb-[80px]  font-bold flex flex-wrap items-center ">
      <h3>
        <img src="logonav.png" />
      </h3>

      <section className="flex flex-wrap gap-x-[35px]  ml-auto">
        <a  className="uppercase" href="#home">home</a>
        <a  className="uppercase" href="#about">about me</a>
        <a  className="uppercase" href="#portfolio">portfolio</a>
        <a  className="uppercase" href="#services">services</a>
        <a  className="uppercase" href="#experence">experence</a>
      </section>
      
        <CustomButton classStyle="ml-auto " text="Contacto" />
      
    </nav>
  );
};
