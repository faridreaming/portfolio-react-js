import { Helmet, HelmetProvider } from "react-helmet-async";
import PDFViewer from "../components/PDFViewer";

const CV = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <section>
          <PDFViewer />
        </section>
      </>
    </HelmetProvider>
  );
};

export default CV;
