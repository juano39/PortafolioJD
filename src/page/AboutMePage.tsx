export const AboutMePage = () => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-x-[128px] bg-hero-pattern bg-cover bg-fixed w-full px-8 ">
      <div className="mt-16 max-w-[880px] ">
        <h2 className="w-56 bg-[#292F36] text-3xl text-center rounded-br-[40px] rounded-tl-[40px] py-3 max-sm:mx-auto mb-8 border-4 border-[#12F7D6]">
          About Men
        </h2>

        <article className="bg-[#292F36] min-w-[344px]  mx-auto rounded-[40px] px-10 py-6 mb-16">
          <span className="text-[#12F7D6]">&lt;p&gt;</span>
          <h3 className="text-2xl pl-3 mb-3 text-[#12F7D6]">Hello!</h3>
          <p className="pl-3 mb-2">
            My name is Juan Daniel Valderrama and I specialize in web
            developement that utilizes HTML, CSS, JS, and REACT etc.
          </p>
          <p className="pl-3 mb-2">
            I am a highly motivated individual and eternal optimist dedicated to
            writing clear, concise, robust code that works. Striving to never
            stop learning and improving.
          </p>
          <p className="pl-3 mb-2">
            When I'm not coding, I am writing bolgs, reading, or picking up some
            new hands-on art project like photography.
          </p>
          <p className="pl-3">
            I like to have my perspective and belief systems challenged so that
            I see the world through new eyes.
          </p>
          <span className="text-[#12F7D6]">&lt;/p&gt;</span>
        </article>
      </div>

      <article className="min-w-[272px] sm:w-[462px] mb-16">
        <img className="rounded-3xl" src="perfil.jpg" alt="foto de mi perfil" />
      </article>
    </section>
  );
};
