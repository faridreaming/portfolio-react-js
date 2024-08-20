const Header = ({ brandName }) => {
  const currentUrl = window.location.href.split("/").pop();

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex max-w-4xl flex-col gap-4 bg-white px-8 py-10 sm:flex-row sm:justify-between">
        <a href="./" className="font-poppins text-lg font-bold uppercase tracking-widest text-black">
          {`${brandName}.`}
        </a>
        <nav>
          <ul className="flex h-full items-center justify-between whitespace-nowrap text-xs sm:gap-16">
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
