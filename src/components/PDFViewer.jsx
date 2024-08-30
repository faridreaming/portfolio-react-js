import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { myCv } from "../assets/documents/";

const PDFViewer = () => {
  return (
    <div className="container mx-auto max-w-4xl px-8 py-10">
      <div className="border shadow">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl={myCv} />
        </Worker>
      </div>
    </div>
  );
};

export default PDFViewer;
