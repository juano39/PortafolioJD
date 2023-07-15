import "aos/dist/aos.css";

import AOS from "aos";
import { CustomButton } from "../components/CustomButton";
import { useEffect } from "react";

export const AboutMePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about"
      className="flex min-[768px]:px-[90px] max-[768px]:px-[10px] w-full max-[768px]:flex-wrap min-h-screen pt-14   gap-x-7 justify-around"
    >
      <article data-aos="flip-left" className="relative max-[768px]:mb-8">
        <img className="relative z-20" src="imgperfil.png" alt="" />
        <div className=" w-full max-h-[443px] h-full max-lg:h-[300px] max-md:hidden rounded-[20px] border-[5px]  border-[#1C9EE7] absolute top-12 left-12 z-10"></div>
      </article>
      <article className="md:w-[620px]">
        <h3 className="text-3xl mb-2 font-bold">ABOUT ME</h3>
        <p className="text-[#E0E0E0] mb-9">
          I am a responsible and respectful person in my professional approach,
          always striving to fulfill commitments and maintain an attitude of
          respect towards my colleagues and collaborators. Valuing teamwork, I
          firmly believe in the importance of collaboration and effective
          communication to achieve outstanding results. <br />
          One of my passions is automation. I am excited to find ways to
          optimize processes and improve efficiency through the use of
          appropriate technological tools and techniques. My aspiration is to
          become a great programmer, constantly learning and enhancing my skills
          to deliver high-quality solutions.
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <CustomButton classStyle="w-[200px]" text="HIRE ME" />
          
          <a className=" max-md:w-full" href="cvd.pdf" target="_blank"  download={'cvd.pdf'}>
            {" "}
            <CustomButton
              classStyle="mim-[768px]:w-[200px]"
              text="RESUME"
              visivility
            />
          </a>
        </div>
      </article>
    </section>
  );
};
