import { hero } from "../assets/images";

const Hero = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row h-[640px]">
      <img src={hero} alt="Hero image" className="object-cover object-center w-full max-sm:aspect-square sm:w-1/2" />
      <div className="bg-primary px-8 py-16 sm:py-28 sm:px-16 sm:w-1/2">
        <div className="bg-white p-8 text-sm relative hero-text-box left-2.5 bottom-[5px] sm:h-full sm:flex sm:flex-col sm:justify-between sm:max-w-md sm:mx-auto overflow-y-auto">
          <div className="space-y-4">
            <p>My hobbies include reading, writing, and playing video games. I eat food and drink fluid water.</p>
            <p>
              My skills include programming in Python, JavaScript, and Java, as well as using tools like Git, Docker,
              and Kubernetes. I also have experience with cloud platforms like AWS and Azure.
            </p>
            <p>I'm currently learning about web development, and I'm excited to share my projects with you.</p>
          </div>
          <a href="/cv" className="block mt-8 bg-black text-white text-center px-8 py-2 w-full sm:w-fit">
            Check out my CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
