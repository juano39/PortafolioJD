
export const CardIntro = () => {
  return (
    <article className="w-[320px] border-4 border-[#ffffff] mx-auto px-6  rounded-tl-[160px] rounded-br-[160px] shadow-custom mb-16">
      <section className="grid justify-items-center mt-9 mb-2">
        <img src="developer.png" alt="" />
        <h2 className="text-[32px]">Juan Daniel</h2>
        <h3 className="text-sm font-thin">Full-stack developer</h3>
      </section>

      <section className="mb-8">
        <article className="flex flex-col gap-y-4">
          <p className="text-sm font-thin flex items-center">
            {" "}
            <img src="icon-mail.png" className="mr-4" alt="" />
            juano30633@gmail.com
          </p>
          <p className="text-sm font-thin flex items-center">
            {" "}
            <img src="icon-map-pin.png" className="mr-4" alt="" />
            Itagüi - Colombia
          </p>
          <p className="text-sm font-thin flex items-center">
            {" "}
            <img src="icon-briefcase.png" className="mr-4" alt="" />
            Full-time
          </p>
        </article>

        <article className="flex flex-wrap gap-2 justify-center text-sm font-thin mt-4">
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">JS</p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            REACT
          </p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">NEXT</p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">VUE</p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            ANGULAR
          </p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">NODE</p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            EXPRESS
          </p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            PYTHON
          </p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">SQL</p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            POSGRES
          </p>
          <p className="bg-[#12F7D6] rounded-full px-2 text-[#292F36] ">
            FIGMA
          </p>
        </article>
      </section>
      <button className="flex py-3 px-8 bg-[#ffffff] rounded-full text-[#292F36] text-xl mb-9">
        Download CV <img src="icon-download.png" className="ml-4" alt="" />
      </button>
    </article>
  );
};
