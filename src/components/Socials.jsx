import { github, linkedin, instagram } from "../assets/icons";

const Socials = () => {
  return (
    <div className="flex gap-4 sm:self-center">
      <a href="https://github.com/faridreaming/" target="_blank" rel="noreferrer">
        <img src={github} alt="Github" className="w-6 invert" />
      </a>
      <a href="https://www.linkedin.com/in/muhammad-farid-1a3639284/" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Linkedin" className="w-6 invert" />
      </a>
      <a href="https://www.instagram.com/faridreaming/" target="_blank" rel="noreferrer">
        <img src={instagram} alt="Instagram" className="w-6 invert" />
      </a>
    </div>
  );
};

export default Socials;
