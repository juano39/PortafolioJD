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
    <article data-aos="flip-up" className="min-[370px]:w-[400px] inline-block  shadow-[0_10px_30px_0_rgba(28,158,231,0.40)] min-[370px]:h-[300px] border-[5px] rounded-[20px] border-[#1c9ee7] p-5">
      <div className="flex items-center gap-x-3 mb-5">
        <img
          className="bg-[#E0E0E0] max-w-[60px] h-[60px] rounded-full"
          src={image}
          alt=""
        />
        <h5 className="min-[370px]:text-3xl text-2xl font-bold uppercase">
          {title}
        </h5>
      </div>
      <p className="text-[#E0E0E0] min-[370px]:h-[154px] overflow-hidden text-ellipsis  ">
        {text}
      </p>
    </article>
  );
};
