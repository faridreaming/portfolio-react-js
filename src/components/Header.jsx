const Header = ({ brandName }) => {
  const currentUrl = window.location.href.split("/").pop();

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="container max-w-4xl mx-auto bg-white px-8 py-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
        <a href="./" className="font-poppins font-bold uppercase text-lg tracking-widest text-black">
          {`${brandName}.`}
        </a>
        <nav>
          <ul className="flex text-xs justify-between items-center h-full sm:gap-16 whitespace-nowrap">
            <li>
              <a href="./" className={`hover:text-primary ${currentUrl === "" ? "text-primary" : undefined}`}>
                Home
              </a>
            </li>
            <li>
              <a href="./cv" className={`hover:text-primary ${currentUrl === "cv" ? "text-primary" : undefined}`}>
                CV
              </a>
            </li>
            <li>
              <a
                href="./portfolio"
                className={`hover:text-primary ${currentUrl === "portfolio" ? "text-primary" : undefined}`}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="./certifications"
                className={`hover:text-primary ${currentUrl === "certifications" ? "text-primary" : undefined}`}
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
