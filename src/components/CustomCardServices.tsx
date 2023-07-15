import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";

interface Props {
  text: string;
  title: string;
  image: string;
}
export const CustomCardServices = ({ image, text, title }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <article data-aos="flip-up" className="md:w-[400px] w-full inline-block  shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] bg-[#ffffff41] backdrop-blur min-[370px]:h-[300px]  rounded-[10px]  p-5">
      <div className="flex items-center gap-x-3 mb-5">
        <img
          className="bg-[#E0E0E0] max-w-[60px] rounded-full"
          src={image}
          alt=""
        />
        <h5 className="md:text-3xl  font-bold uppercase">
          {title}
        </h5>
      </div>
      <p className="text-[#E0E0E0] min-[370px]:h-[154px] overflow-hidden text-ellipsis  ">
        {text}
      </p>
    </article>
  );
};
