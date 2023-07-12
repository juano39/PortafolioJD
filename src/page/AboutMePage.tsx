import "aos/dist/aos.css";

import AOS from "aos";
import { CustomButton } from "../components/CustomButton";
import { useEffect } from "react";

export const AboutMePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="flex w-full max-[768px]:flex-wrap mb-[150px] gap-x-7 justify-around">
      <article data-aos="flip-left" className="relative max-[768px]:mb-8">
        <img className="relative z-20" src="imgperfil.png" alt="" />
        <div className=" w-full max-h-[443px] h-full max-lg:h-[300px] max-md:hidden rounded-[20px] border-[5px]  border-[#1C9EE7] absolute top-12 left-12 z-10"></div>
      </article>
      <article className="md:w-[620px]">
        <h3 className="text-3xl mb-2 font-bold">ABOUT ME</h3>
        <p className="text-[#E0E0E0] mb-9">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <CustomButton classStyle="w-[200px]" text="HIRE ME" />
          <CustomButton
            classStyle="mim-[768px]:w-[200px]"
            text="RESUME"
            visivility
          />
        </div>
      </article>
    </section>
  );
};
