import { CustomSocial } from "../components/CustomSocial";
import dataSocial from "../data/socialData.json";

export const ContactPage = () => {
  return (
    <footer className="w-full pt-10 h-[700px] ">
      <h1 className="text-center uppercase text-2xl font-bold mb-[100px]">
        {" "}
        contacto
      </h1>
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
    </footer>
  );
};
