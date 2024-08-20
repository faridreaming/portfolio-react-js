const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 text-sm [&>*]:transition">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-full px-3 py-2 outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full px-3 py-2 outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="w-full px-3 py-2 outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
        autoComplete="off"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Type your message here"
        className="h-24 w-full px-3 py-2 outline-none focus:bg-transparent focus:text-white focus:ring-1 focus:ring-white"
      ></textarea>
      <button
        type="submit"
        className="w-1/2 self-end border bg-transparent py-1 font-semibold text-white outline-none transition hover:bg-white hover:text-primary focus:bg-white focus:text-primary sm:w-fit sm:px-6"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
