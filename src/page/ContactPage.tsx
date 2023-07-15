import { CustomSocial } from "../components/CustomSocial";
import dataSocial from "../data/socialData.json";

export const ContactPage = () => {
  return (
    <footer className="w-full py-10 relative  min-[768px]:px-[90px] max-[768px]:px-[10px] bg-gradient-to-r from-[#3b1b73] from-10% to-[#1C9EE7]  rounded-tr-[80px] rounded-tl-[80px] ">
      <h3 className="text-center uppercase text-2xl font-bold mb-[50px]">
        {" "}
        contacto
      </h3>
      <section className="flex max-md:flex-col max-sm:flex-col items-center">
        <article>
          <h4 className="text-2xl mb-5 font-medium ">Get in touch with me</h4>
          <p className="max-w-[500px] font-extralight mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            maxime. Magni, ducimus praesentium delectus esse blanditiis
            consequuntur illo in incidunt. Quos consectetur vel inventore fuga
            dolore quibusdam, repudiandae voluptatem quidem?
          </p>
          <article className="flex flex-col gap-4">
            <div className="flex items-center">
              <CustomSocial iconImg="gps.png" url="" />
              <p className=" ml-3">Colombia - Antioquia - Itagui</p>
            </div>
            <div className="flex items-center">
              <CustomSocial iconImg="mail.png" url="" />
              <p className=" ml-3">juano30633@gmail.com</p>
            </div>
          </article>
        </article>
        <img className="max-h-[15vw] mr-3 max-md:hidden" src="flecha.png" alt="" />
        <img className="max-h-[20vh] md:hidden mb-1" src="flechaarriba.png" alt="" />
        <img
          className="w-[20%] max-md:w-[30%]  animate-flotin"
          src="contac.png"
          alt=""
        />
      </section>
      <section className="">
        <hr />
        <div className="flex flex-wrap items-center justify-center sm:justify-between">
          <img className="mt-3" src="logonav.png" alt="" />
          <p>2022 - Creado Por Juan Daniel Valderrama</p>
          <article className="flex gap-3 mt-3 ">
            {dataSocial.redSocial.map((itm, index) => (
              <CustomSocial url={itm.url} key={index} iconImg={itm.icon} />
            ))}
          </article>
        </div>
      </section>
      <div className="w-[100px] h-[200px] left-0 rounded-r-full absolute top-[-80px]  bg-gradient-to-b from-[#3b1b7394]  to-[#1c9de786]"></div>
        <div className="w-[100px] h-[200px] rounded-l-full absolute top-[-80px] right-0  bg-gradient-to-b from-[#3b1b7394]  to-[#1c9de786]"></div>
    </footer>
  );
};
