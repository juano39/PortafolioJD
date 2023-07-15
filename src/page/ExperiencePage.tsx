import { CustomCardXp } from "../components/CustomCardXp";
import data from '../data/experienceData.json'

export const ExperiencePage = () => {
  return (
    <section id="experence" className="mb-20 min-[768px]:px-[90px] max-[768px]:px-[10px]">
      <h4 className="text-center uppercase text-[32px] font-bold mb-[100px]">
        {data.pageTitle}
      </h4>

      <article className=" flex  flex-wrap justify-center gap-28 max-w-[890px] mx-auto ">
        {
          data.experience.map((exp, index) => (
            <CustomCardXp image={exp.image} key={index} leguage={exp.languages} />
          ))
        }
      </article>
    </section>

  );
};
