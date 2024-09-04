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
          <div className="container mx-auto flex max-w-4xl flex-col gap-8 px-8 py-10 sm:p-20">
            {portfolio.map((item, index) => (
              <div
                key={index}
                className="group w-full bg-gray-100 shadow transition duration-300 hover:shadow-lg hover:shadow-gray-400 md:grid md:grid-cols-[1fr_3fr] md:shadow-lg"
              >
                <div className="flex flex-col px-4 py-2 md:self-end md:px-6 md:py-20">
                  <h2 className="font-poppins text-sm font-medium text-black sm:text-base">{item.title}</h2>
                  <p className="font-poppins text-xs font-light text-black">{item.techStack}</p>
                </div>
                <a className="block overflow-hidden" href={item.link} target="_blank">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="transition duration-300 group-hover:scale-[1.025] md:aspect-[4/3] md:object-cover"
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
