import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, CV, Portfolio } from "./pages";

const Container = ({ children }) => {
  return <div className="container mx-auto max-w-4xl">{children}</div>;
};

const brand = "Faridreaming";
const pageTitle = (pageName) => `${pageName} | Farid's Website`;

const App = () => {
  return (
    <div>
      <Header brandName={brand} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home pageTitle={pageTitle("Home")} />} />
          <Route path="/cv" element={<CV pageTitle={pageTitle("CV")} />} />
          <Route path="/portfolio" element={<Portfolio pageTitle={pageTitle("Portfolio")} />} />
          <Route path="/certifications" element={""} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
