import Socials from "./Socials";
import ContactForm from "./ContactForm";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="w-full bg-primary mt-10">
      <div className="container mx-auto max-w-4xl px-8 py-10 sm:p-20">
        <h2 className="font-bold font-poppins uppercase tracking-widest text-white mb-8">
          Contact me for collaboration and speaking engagement opportunities!
        </h2>
        <div className="grid gap-8">
          <Socials />
          <ContactForm />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
