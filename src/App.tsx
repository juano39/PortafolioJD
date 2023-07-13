import { AboutMePage } from "./page/AboutMePage";
import { BrowserRouter } from "react-router-dom";
import { ContactPage } from "./page/ContactPage";
import { ExperiencePage } from "./page/ExperiencePage";
import { HomePage } from "./page/HomePage";
import { NavBar } from "./components/NavBar";
import { ProfolioPage } from "./page/PortfolioPage";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { ServicesPage } from "./page/ServicesPage";

export const App = () => {
  return (
    <BrowserRouter>
      <div className=" text-white z-0 w-full  flex justify-center bg-gradient-to-t from-[#0A0A0B] from-1%  pt-3 to-[#220E44] to-40% relative">
       
        <div className="max-w-[1360px]  w-full min-[768px]:px-[90px] max-[768px]:px-[10px] z-40 ">
          <NavBar />
          <HomePage />
          <AboutMePage />
          <ProfolioPage />
          <ServicesPage />
          <ExperiencePage />
          <ScrollToTopButton />
          <ContactPage />
        </div>
        <div className="absolute z-0 bottom-0 w-full bg-gradient-to-r from-[#3b1b73] from-10% to-[#1C9EE7] h-[700px] rounded-tr-[80px] rounded-tl-[80px]"></div>
        <div className="w-[100px] h-[200px] left-0 rounded-r-full absolute bottom-[580px]   bg-gradient-to-b from-[#3b1b7394]  to-[#1c9de786]"></div>
        <div className="w-[100px] h-[200px] rounded-l-full absolute bottom-[580px] right-0  bg-gradient-to-b from-[#3b1b7394]  to-[#1c9de786]"></div>
      </div>
    </BrowserRouter>
  );
};
