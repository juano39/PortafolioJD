import { CardDestaque } from "./CardDestaque";
import { CardIntro } from "./CardIntro";
import { InfoIntro } from "./InfoIntro";

export const Home = () => {
  return (
    <header className="flex flex-wrap w-full max-w-[1664px] justify-center items-center">
      <CardIntro />

      <div className="flex flex-wrap justify-between ">
        <InfoIntro />

        <CardDestaque />
      </div>
    </header>
  );
};
