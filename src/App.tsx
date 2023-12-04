import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./page/HomePage";
import { NavBar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#292F36] text-[#FFFFFF] font-mono px-8">
        <NavBar />
        <h3 className="max-lg:hidden text-[117px] text-[#98FAEC] text-center mb-16">Developer </h3>
        <HomePage />
      </div>
    </BrowserRouter>
  );
};
