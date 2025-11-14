import Nav from "../components/navbar/Nav";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
        <Nav/>
      <h1 className="text-5xl md:text-7xl font-bold text-lime-300 mb-8 text-center">Let's Connect</h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        Have a project in mind? We'd love to collaborate and bring your vision to life.
      </p>

      <form className="w-full max-w-lg space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-neutral-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-300 transition"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-neutral-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-300 transition"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 bg-neutral-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-300 transition"
        ></textarea>
        <button
          type="submit"
          className="bg-lime-300 text-black font-semibold px-6 py-3 rounded-lg hover:bg-lime-400 transition-all w-full"
        >
          Send Message
        </button>
      </form>
    </PageTransition>
  );
}
