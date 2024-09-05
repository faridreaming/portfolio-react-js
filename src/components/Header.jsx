import { useState, useEffect } from "react";

const Header = ({ brandName }) => {
  const [currentUrl, setCurrentUrl] = useState(window.location.hash.replace("#/", "") || "");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentUrl(window.location.hash.replace("#/", "") || "");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex max-w-4xl flex-col gap-4 bg-white px-8 py-10 sm:flex-row sm:justify-between">
        <a href="./" className="font-poppins text-xl font-bold uppercase tracking-[.25rem] text-black">
          {`${brandName}.`}
        </a>
        <nav className="tracking-wider">
          <ul className="flex h-full items-center justify-between whitespace-nowrap text-xs sm:gap-12">
            <li>
              <a href="./" className={`hover:text-primary ${currentUrl === "" ? "text-primary" : ""}`}>
                Home
              </a>
            </li>
            <li>
              <a href="./#/cv" className={`hover:text-primary ${currentUrl === "cv" ? "text-primary" : ""}`}>
                CV
              </a>
            </li>
            <li>
              <a
                href="./#/portfolio"
                className={`hover:text-primary ${currentUrl === "portfolio" ? "text-primary" : ""}`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="./#/certifications"
                className={`hover:text-primary ${currentUrl === "certifications" ? "text-primary" : ""}`}
              >
                Certifications
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
