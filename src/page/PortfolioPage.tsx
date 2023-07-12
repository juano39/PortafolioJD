import { CustomButton } from "../components/CustomButton";
import { CustomCardProyect } from "../components/CustomCardProyect";

export const ProfolioPage = () => {
  return (
    <section className="w-full">
      <h3 className="text-[32px] font-bold text-center mb-24">PORTFOLIO</h3>
      {/* <div className="w-[500px] max-[370px]:hidden flex justify-between font-bold mb-[100px] mx-auto">
        <p>Mobile App</p>
        <p>Website</p>
        <p>Desktop</p>
        <p>Other Projects</p>
      </div> */}
      <section className="flex flex-col lg:item-center gb-withe gap-y-14">
        <CustomCardProyect lado={0} />
        <CustomCardProyect lado={1} />
        <CustomCardProyect lado={2} />
        <CustomCardProyect lado={3} />
        <CustomCardProyect lado={4} />
      </section>
      <div className="text-center mt-12">
        <CustomButton classStyle="w-[200px]" text="View all" />
      </div>
    </section>
  );
};
