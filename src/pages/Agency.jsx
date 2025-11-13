import Nav from "../components/navbar/Nav";
import PageTransition from "../components/PageTransition";

export default function Agency() {
  const values = [
    { title: "Strategy", desc: "Data-driven insights guiding creative direction." },
    { title: "Design", desc: "Visual storytelling that evokes emotion and action." },
    { title: "Development", desc: "Seamless, performant digital experiences." },
  ];

  return (
    <PageTransition>
      <Nav/>
      <h1 className="text-5xl md:text-7xl font-bold text-lime-300 mb-8 text-center">The Agency</h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-16">
        We’re a creative studio blending design and innovation to shape brand identities and digital experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {values.map((v, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-8 text-center hover:bg-lime-300 hover:text-black transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold mb-4">{v.title}</h2>
            <p className="text-gray-400">{v.desc}</p>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}

