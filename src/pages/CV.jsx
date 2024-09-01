import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PDFViewer from "../components/PDFViewer";
import files1 from "../assets/documents/my-cv.pdf";
import files2 from "../assets/documents/cv-farid.pdf";

const pdfFiles = [files1, files2];

const CV = ({ pageTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < pdfFiles.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <section>
          <div className="container mx-auto max-w-4xl py-10 sm:p-20">
            <div className="mb-6 flex select-none justify-center gap-3">
              <span
                className={`flex h-9 cursor-pointer items-center rounded-full border px-4 font-poppins text-2xl font-bold text-primary hover:bg-slate-100 ${
                  currentIndex === 0 ? "opacity-50" : ""
                }`}
                onClick={handlePrevious}
              >
                &lt;
              </span>
              <span className="flex h-9 cursor-default items-center rounded-full border px-4 text-black">
                {currentIndex + 1} / {pdfFiles.length}
              </span>
              <span
                className={`flex h-9 cursor-pointer items-center rounded-full border px-4 font-poppins text-2xl font-bold text-primary hover:bg-slate-100 ${
                  currentIndex === pdfFiles.length - 1 ? "opacity-50" : ""
                }`}
                onClick={handleNext}
              >
                &gt;
              </span>
            </div>
            <PDFViewer fileUrl={pdfFiles[currentIndex]} />
          </div>
        </section>
      </>
    </HelmetProvider>
  );
};

export default CV;
