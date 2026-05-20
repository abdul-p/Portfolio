import { motion } from "framer-motion";

const projects = [
  {
    title: "Vero Homes",
    description:
      "A fullstack Nigerian real estate platform where agents can list properties and buyers can search, filter, and inquire. Features role-based auth, admin approval system, Cloudinary image uploads, and location-based filtering across Lagos, Abuja, and Port Harcourt.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Cloudinary", "Tailwind"],
    live: "https://vero-homes.vercel.app",
    github: "https://github.com/abdul-p/Vero-homes",
    featured: true,
    emoji: "🏠",
    color: "from-blue-500/20 to-purple-500/20",
    border: "border-blue-500/20",
  },
  {
    title: "ForexPro Dashboard",
    description:
      "A multi-user forex trading dashboard with live currency prices, interactive charts, trade journal, economic calendar, and portfolio analytics. Integrates Twelve Data API for real-time forex data and NewsData.io for market news.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Recharts", "Twelve Data API", "Tailwind"],
    live: "https://forex-dashboard-wheat.vercel.app",
    github: "https://github.com/abdul-p/forex-dashboard",
    featured: true,
    emoji: "📈",
    color: "from-green-500/20 to-teal-500/20",
    border: "border-green-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I've Built
          </p>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Real fullstack applications built and deployed — not just tutorials
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${project.color} border ${project.border} rounded-2xl p-8 hover:scale-[1.01] transition-transform duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{project.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-xs text-green-400 font-medium">
                          ★ Featured Project
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-400 text-gray-950 px-5 py-2 rounded-xl text-sm font-bold hover:bg-green-300 transition"
                    >
                      Live Demo →
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-700 text-gray-300 px-5 py-2 rounded-xl text-sm font-medium hover:border-green-400 hover:text-green-400 transition"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right — Tags */}
                <div>
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-900/80 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            More projects on my GitHub
          </p>
          <a
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-300 px-6 py-3 rounded-xl text-sm font-medium hover:border-green-400 hover:text-green-400 transition inline-block"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
}