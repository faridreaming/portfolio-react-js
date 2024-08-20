import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import WhatIDo from "../components/WhatIDo";

const Home = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <section>
          <Welcome />
          <Hero />
          <WhatIDo />
        </section>
      </>
    </HelmetProvider>
  );
};

export default Home;
