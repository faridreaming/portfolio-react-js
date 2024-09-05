import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArrowUp from "./components/ArrowUp";
import { Home, CV, Portfolio, Certifications } from "./pages";

const brand = "Faridreaming";
const pageTitle = (pageName) => `${pageName} | Farid's Website`;

const App = () => {
  return (
    <>
      <Header brandName={brand} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home pageTitle={pageTitle("Home")} />} />
          <Route path="/cv" element={<CV pageTitle={pageTitle("CV")} />} />
          <Route path="/portfolio" element={<Portfolio pageTitle={pageTitle("Portfolio")} />} />
          <Route path="/certifications" element={<Certifications pageTitle={pageTitle("Certifications")} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ArrowUp />
    </>
  );
};

export default App;
