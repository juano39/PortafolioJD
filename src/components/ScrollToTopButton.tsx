import { useEffect, useState } from "react";

import { SlArrowUp } from "react-icons/sl";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
          className="fixed z-10 bottom-4  right-4 bg-gradient-to-r hover:shadow-[#1C9EE7] hover:shadow-md from-[#1c9de7aa] to-[#551160a0] text-white p-3 rounded-full"
          onClick={scrollToTop}
        >
          <SlArrowUp/>
        </button>
      )}
    </>
  );
};
