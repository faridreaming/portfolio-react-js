import { Helmet, HelmetProvider } from "react-helmet-async";
import portfolio from "../assets/images/portfolio";

const Portfolio = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <section>
          <div className="container mx-auto flex max-w-4xl flex-col gap-8 px-8 py-10 sm:py-20">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="w-full border border-gray-300 bg-gray-100 shadow transition duration-300 hover:shadow-lg hover:shadow-gray-400 sm:grid sm:grid-cols-[1fr_3fr] sm:shadow-lg"
              >
                <div className="flex flex-col px-4 py-2 sm:self-end sm:px-6 sm:py-20">
                  <h2 className="font-poppins text-sm font-medium text-black sm:text-lg">{item.title}</h2>
                  <p className="font-poppins text-xs font-light text-black sm:text-sm">{item.techStack}</p>
                </div>
                <a className="block overflow-hidden p-1 sm:p-2" href={item.link} target="_blank">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="border border-gray-300 transition duration-300 sm:aspect-[4/3] sm:object-cover"
                  />
                </a>
              </div>
            ))}
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default Portfolio;
