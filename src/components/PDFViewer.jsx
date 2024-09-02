import { useState, useEffect } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { eye } from "../assets/icons";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ fileUrl }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setKey((prevKey) => prevKey + 1);
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const openFile = () => {
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="relative shadow-none sm:shadow">
      <a
        className="absolute right-0 top-0 z-40 mr-8 flex cursor-pointer items-center justify-center bg-primary p-1 transition hover:opacity-50 sm:mr-0 sm:p-2"
        onClick={openFile}
      >
        <img src={eye} alt="Open document" className="w-5 invert sm:w-6" />
      </a>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} key={key} />
      </Worker>
    </div>
  );
};

export default PDFViewer;
