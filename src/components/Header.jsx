const Header = () => {
  const currentUrl = window.location.href.split("/").pop();

  return (
    <header className="container mx-auto bg-white px-8 py-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
      <a
        href="./"
        className="font-poppins font-bold uppercase text-sm tracking-widest text-black"
      >
        faridreaming.
      </a>
      <nav>
        <ul className="flex text-xs justify-between items-center h-full gap-4 whitespace-nowrap">
          <li>
            <a
              href="./"
              className={currentUrl === "" ? "text-blue-500" : undefined}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./cv"
              className={currentUrl === "cv" ? "text-blue-500" : undefined}
            >
              CV
            </a>
          </li>
          <li>
            <a
              href="./portfolio"
              className={
                currentUrl === "portfolio" ? "text-blue-500" : undefined
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="./certifications"
              className={
                currentUrl === "certifications" ? "text-blue-500" : undefined
              }
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
