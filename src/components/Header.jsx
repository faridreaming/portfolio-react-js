const Header = ({ brandName }) => {
  const currentUrl = window.location.href.split("/").pop();

  return (
    <header className="container max-w-4xl mx-auto bg-white px-8 py-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
      <a href="./" className="font-poppins font-bold uppercase text-lg tracking-widest text-black">
        {`${brandName}.`}
      </a>
      <nav>
        <ul className="flex text-xs justify-between items-center h-full gap-4 whitespace-nowrap">
          <li>
            <a href="./" className={`hover:text-blue-500 ${currentUrl === "" ? "text-blue-500" : undefined}`}>
              Home
            </a>
          </li>
          <li>
            <a href="./cv" className={`hover:text-blue-500 ${currentUrl === "cv" ? "text-blue-500" : undefined}`}>
              CV
            </a>
          </li>
          <li>
            <a
              href="./portfolio"
              className={`hover:text-blue-500 ${currentUrl === "portfolio" ? "text-blue-500" : undefined}`}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="./certifications"
              className={`hover:text-blue-500 ${currentUrl === "certifications" ? "text-blue-500" : undefined}`}
            >
              Certifications
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
