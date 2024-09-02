const ContactForm = () => {
  return (
    <form className="flex flex-col gap-3 text-sm [&>*]:transition">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        className="w-full bg-black/10 px-3 py-2 text-white outline-none placeholder:text-white/65 hover:bg-black/20 focus:bg-white focus:text-slate-500 focus:placeholder:text-slate-500/50"
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full bg-black/10 px-3 py-2 text-white outline-none placeholder:text-white/65 hover:bg-black/20 focus:bg-white focus:text-slate-500 focus:placeholder:text-slate-500/50"
        autoComplete="off"
      />
      <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="w-full bg-black/10 px-3 py-2 text-white outline-none placeholder:text-white/65 hover:bg-black/20 focus:bg-white focus:text-slate-500 focus:placeholder:text-slate-500/50"
        autoComplete="off"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Type your message here"
        className="h-24 w-full resize-none bg-black/10 px-3 py-2 text-white outline-none placeholder:text-white/65 hover:bg-black/20 focus:bg-white focus:text-slate-500 focus:placeholder:text-slate-500/50"
      ></textarea>
      <button
        type="submit"
        className="box-border w-1/2 self-end bg-primary py-1 font-semibold text-white outline outline-2 outline-white transition hover:bg-white hover:text-primary focus:bg-white focus:text-primary focus:outline-offset-2 sm:w-fit sm:px-6"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
