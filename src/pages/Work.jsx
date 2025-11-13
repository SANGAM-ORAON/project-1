import Nav from "../components/navbar/Nav";
import PageTransition from "../components/PageTransition";

export default function Work() {
  const projects = [
    { title: "Digital Campaign", desc: "A high-impact campaign that boosted brand awareness." },
    { title: "Brand Identity", desc: "Crafting a visual language for modern businesses." },
    { title: "E-commerce Design", desc: "UX-focused online store built for conversions." },
    { title: "3D Motion Reel", desc: "Futuristic motion graphics and immersive storytelling." },
  ];

  return (
    <PageTransition>
      <Nav/>
      <h1 className="text-5xl md:text-7xl font-bold text-lime-300 mb-8 text-center tracking-tight">Our Work</h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        A collection of projects that merge design, technology, and purpose.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-6 hover:bg-lime-300 hover:text-black transition-all duration-300 transform hover:scale-[1.03]"
          >
            <div className="h-40 bg-gray-700 mb-4 rounded-lg"></div>
            <h2 className="text-2xl font-semibold mb-2">{p.title}</h2>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
