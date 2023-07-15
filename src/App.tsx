import { AboutMePage } from "./page/AboutMePage";
import { BrowserRouter } from "react-router-dom";
import { ContactPage } from "./page/ContactPage";
import { ExperiencePage } from "./page/ExperiencePage";
import { HomePage } from "./page/HomePage";
import { ProfolioPage } from "./page/PortfolioPage";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { ServicesPage } from "./page/ServicesPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className=" text-white z-0 w-full  bg-gradient-to-t from-[#0A0A0B] from-1%  pt-3 to-[#220E44] to-40% flex justify-center relative">
        <div className="max-w-[1360px] w-full z-40 ">
          <HomePage />
          <AboutMePage />
          <ProfolioPage />
          <ServicesPage />
          <ExperiencePage />
          <ScrollToTopButton />
          <ContactPage />
        </div>
        
        
      </div>
    </BrowserRouter>
  );
};
