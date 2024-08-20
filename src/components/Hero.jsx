import { hero } from "../assets/images";

const Hero = () => {
  return (
    <div className="flex w-full flex-col sm:h-[640px] sm:flex-row">
      <img src={hero} alt="Hero image" className="w-full object-cover object-top max-sm:aspect-square sm:w-1/2" />
      <div className="bg-primary px-8 py-16 sm:w-1/2 lg:px-16 lg:py-28">
        <div className="sm:text-md hero-text-box relative bottom-[5px] left-2.5 overflow-y-auto bg-white p-8 text-sm sm:mx-auto sm:flex sm:h-full sm:max-w-sm sm:flex-col sm:justify-between">
          <div className="space-y-4">
            <p>My hobbies include reading, writing, and playing video games. I eat food and drink fluid water.</p>
            <p>
              My skills include programming in Python, JavaScript, and Java, as well as using tools like Git, Docker,
              and Kubernetes. I also have experience with cloud platforms like AWS and Azure.
            </p>
            <p>I'm currently learning about web development, and I'm excited to share my projects with you.</p>
          </div>
          <a href="/cv" className="mt-8 block w-full bg-black px-8 py-2 text-center text-white sm:w-fit">
            Check out my CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
