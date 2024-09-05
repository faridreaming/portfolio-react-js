import { useState, useEffect } from "react";

const ArrowUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      className={`fixed bottom-0 right-0 mb-3 mr-3 flex aspect-square h-12 w-12 rotate-90 items-center justify-center rounded-full bg-slate-500 font-poppins text-3xl font-bold text-white transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      href="#"
    >
      &lt;
    </a>
  );
};

export default ArrowUp;
