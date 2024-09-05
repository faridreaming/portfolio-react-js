import { Helmet, HelmetProvider } from "react-helmet-async";
import certifications from "../assets/documents/certifications";

const Certifications = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <section>
          <div className="container mx-auto max-w-4xl px-8 py-10 sm:p-20">
            <h2 className="mb-8 font-poppins text-xl font-bold uppercase tracking-[.25rem] text-black sm:mb-20 sm:text-2xl">
              Certifications I Have Obtained
            </h2>
            <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-20">
              {certifications.map((certYear) => (
                <div key={certYear.year}>
                  <h3 className="mb-2 font-poppins text-2xl font-extrabold tracking-[.25rem] text-black sm:mb-8 sm:text-4xl">
                    {certYear.year}
                  </h3>
                  <ul className="flex list-outside list-disc flex-col gap-2 px-8 text-sm leading-relaxed sm:gap-4 sm:text-base">
                    {certYear.items.map((cert, index) => (
                      <li key={index}>
                        <span className="font-semibold text-slate-700">{cert.title}</span> - {cert.company}{" "}
                        <span className="italic">({cert.date})</span> <br />
                        <a href={cert.link} className="text-blue-600 underline">
                          View Certificate
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default Certifications;
