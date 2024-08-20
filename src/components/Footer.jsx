import Socials from "./Socials";
import ContactForm from "./ContactForm";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="mt-24 w-full bg-primary">
      <div className="container mx-auto max-w-4xl px-8 py-10 sm:p-20">
        <h2 className="mb-8 font-poppins font-bold uppercase tracking-widest text-white sm:mb-10 sm:text-2xl">
          Contact me for collaboration and speaking engagement opportunities!
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <Socials />
          <ContactForm />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
