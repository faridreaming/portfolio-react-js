const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 [&>*]:transition text-sm">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="px-3 py-2 w-full outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="px-3 py-2 w-full outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="px-3 py-2 w-full outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Type your message here"
        className="px-3 py-2 w-full h-24 outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
      ></textarea>
      <button
        type="submit"
        className="w-1/2 bg-transparent text-white outline-none border py-1 self-end font-semibold hover:bg-white hover:text-primary focus:bg-white focus:text-primary transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
