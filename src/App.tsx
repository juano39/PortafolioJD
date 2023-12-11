import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { NavBar } from "./components/NavBar";
import { AboutMePage } from "./page/AboutMePage";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#292F36] text-[#FFFFFF] font-mono">
        <NavBar />
        <h3 className="max-lg:hidden text-[90px] text-[#98FAEC] text-center mb-16">Developer </h3>
        <HomePage />
        <AboutMePage/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};
