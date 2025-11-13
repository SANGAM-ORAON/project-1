import Nav from "../components/navbar/Nav";
import PageTransition from "../components/PageTransition";

export default function Blog() {
  const posts = [
    { title: "Designing for Emotion", desc: "How emotional design increases brand connection." },
    { title: "2025 Web Trends", desc: "Emerging UX and motion patterns to watch." },
    { title: "AI in Creativity", desc: "How technology is shaping the design process." },
  ];

  return (
    <PageTransition>
        <Nav/>
      <h1 className="text-5xl md:text-7xl font-bold text-lime-300 mb-8 text-center">Our Blog</h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-12">
        Insights, strategies, and stories from the creative frontlines.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-8 hover:bg-lime-300 hover:text-black transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.desc}</p>
            <button className="text-sm font-semibold hover:underline">Read More →</button>
          </div>
        ))}
      </div>
    </PageTransition>
  );
}
