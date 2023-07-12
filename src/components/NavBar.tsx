import { CustomButton } from "./CustomButton";

export const NavBar = () => {
  return (
    <nav className="w-full mx-auto mb-[100px]  font-bold flex flex-wrap items-center ">
      <h3>
        <img  src="logonav.png" />
          
        
      </h3>

      <section className="flex max-[370px]:flex-col gap-x-[35px]  ml-auto">
        <p>HOME</p>
        <p>ABOUT ME</p>
        <p>PORTFOLIO</p>
        <p>SERVICES</p>
        <p>EXPERENCE</p>
      </section>

      <CustomButton classStyle="ml-auto " text="Contacto" />
    </nav>
  );
};
