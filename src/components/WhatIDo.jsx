const WhatIDo = () => {
  return (
    <div className="container mx-auto max-w-4xl px-8 py-10 sm:p-20">
      <h2 className="mb-8 font-poppins text-xl font-bold uppercase tracking-[.25rem] text-black sm:mb-20 sm:text-2xl">
        What I Do
      </h2>
      <div className="grid gap-10 text-sm sm:grid-cols-2 sm:gap-y-20 sm:text-base">
        <div>
          <h3 className="mb-4 font-poppins font-medium text-black">Software Development</h3>
          <ul className="list-outside list-disc px-8 leading-relaxed">
            <li>Creating a software application from scratch using the latest technologies.</li>
            <li>Maintaining and updating existing software applications.</li>
            <li>Debugging and troubleshooting software applications.</li>
          </ul>
        </div>
        <div className="sm:row-span-2">
          <h3 className="mb-4 font-poppins font-medium text-black">Web Development</h3>
          <ul className="list-outside list-disc px-8 leading-relaxed">
            <li>Creating a website from scratch using the latest technologies.</li>
            <li>Optimizing websites for speed and performance.</li>
            <li>Creating responsive websites that work on all devices.</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-poppins font-medium text-black">UI/UX Design</h3>
          <ul className="list-outside list-disc px-8 leading-relaxed">
            <li>Creating wireframes and mockups for websites and applications.</li>
            <li>Designing user-friendly interfaces that are easy to navigate.</li>
            <li>Creating visually appealing designs that engage users.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
