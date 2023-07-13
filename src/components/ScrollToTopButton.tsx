import { useEffect, useState } from "react";

import { SlArrowUp } from "react-icons/sl";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // console.log(window.scrollY );
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="fixed animate-flotin z-10 bottom-4  right-4 bg-gradient-to-r hover:shadow-[rgba(248,244,244,0.21)] hover:border hover:border-[#dadce0] from-[#1c9de7aa] to-[#551160a0] text-white p-3 rounded-full"
          onClick={scrollToTop}
        >
          <SlArrowUp/>
        </button>
      )}
    </>
  );
};
