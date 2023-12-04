
export const InfoIntro = () => {
  return (
    <section className="min-w-[328px] max-w-[745px] mx-auto mb-16">
      <article className="mb-8">
        <span className="text-[#12F7D6]">&lt;h1&gt;</span>
        <h1 className="text-3xl flex flex-col pl-3">
          <span>Hey</span>
          <span>
            I’m<span className="text-[#12F7D6]">Juan Daniel</span>,
          </span>
          <span>Full-stack developer</span>
        </h1>
        <span className="text-[#12F7D6]">&lt;/h1&gt;</span>
      </article>

      <article className="mb-4">
        <span className="text-[#12F7D6]">&lt;p&gt;</span>
        <p className="pl-3">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <span className="text-[#12F7D6]">&lt;/p&gt;</span>
      </article>

      <button className="text-3xl text-[#12F7D6] flex md:mx-auto gap-4">
        Let’s talk <img src="button-mail.png" alt="" />
      </button>
    </section>
  );
};
