import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

interface Props {
  lado: number;
  text?: string;
  title?: string;
  image?: string;
}

export const CustomCardProyect = ({ lado }: Props) => {
  useEffect(() => {
    AOS.init({
      offset: 250, // Ajusta el offset según tus necesidades
    });
  }, []);
  return (
    <article
      data-aos="zoom-in"
      className={`flex flex-wrap justify-between  ${
        lado % 2 === 0 ? "lg:flex-row-reverse " : ""
      }`}
    >
      <section className="relative">
        <img
          className="relative  z-20 w-[480px] h-[242px]"
          src="proyect.png"
          alt=""
        />
        <div className="w-[480px] max-[768px]:hidden h-[242px] rounded-[20px] border-[5px] border-[#1C9EE7] absolute top-10 left-10 z-10"></div>
      </section>

      <section className="min-[768px]:w-[529px] mt-3">
        <h4 className="text-2xl text-[#1C9EE7] mb-5">PROYECTO {lado + 1}</h4>
        <h5 className="text-2xl font-bold mb-5">WEB DE TENIS</h5>
        <p className="text-[#E0E0E0] min-[768px]:h-[120px] ">
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal{" "}
        </p>
        <button className="font-bold transition duration-300  ease-in-out hover:scale-110 ">
          <span className="text-2xl mr-1 ">→</span> READ MORE
        </button>
      </section>
    </article>
  );
};
