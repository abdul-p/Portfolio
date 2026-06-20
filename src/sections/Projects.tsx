import { motion } from "framer-motion";
import { ExternalLink, Headphones, Home, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "ServiceDesk",
    description:
      "A multi-tenant omnichannel customer support SaaS platform. Companies register, onboard agents via company slug, and manage customer conversations in a unified real-time workspace. Features live agent presence, ticket pickup awareness, and a subscription-based seat model.",
    tags: ["React", "TypeScript", "Socket.io", "Framer Motion", "Node.js", "Express", "MongoDB"],
    live: "https://service-desk-alpha-one.vercel.app",
    github: "https://github.com/abdul-p/Service-Desk",
    icon: Headphones,
    color: "from-violet-500/10 to-pink-500/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-400/10",
  },
  {
    title: "Vero Homes",
    description:
      "A fullstack Nigerian real estate platform where agents can list properties and buyers can search, filter, and inquire. Features role-based auth, admin approval system, Cloudinary image uploads, and location-based filtering across Lagos, Abuja, and Port Harcourt.",
    tags: ["Next.js", "TypeScript", "MongoDB", "NextAuth", "Cloudinary", "Tailwind"],
    live: "https://vero-homes.vercel.app",
    github: "https://github.com/abdul-p/Vero-homes",
    icon: Home,
    color: "from-blue-500/10 to-purple-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
  },
  {
    title: "ForexPro Dashboard",
    description:
      "A multi-user forex trading dashboard with live currency prices, interactive charts, trade journal, economic calendar, and portfolio analytics. Integrates Twelve Data API for real-time forex data and NewsData.io for market news.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Recharts", "Twelve Data API", "Tailwind"],
    live: "https://forex-dashboard-wheat.vercel.app",
    github: "https://github.com/abdul-p/forex-dashboard",
    icon: TrendingUp,
    color: "from-green-500/10 to-teal-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    iconBg: "bg-green-400/10",
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
              whileHover={{ scale: 1.01 }}
              className={`bg-gradient-to-br ${project.color} border ${project.border} rounded-2xl p-8 transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                      <project.icon size={24} className={project.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-green-400 font-medium">
                        ★ Featured Project
                      </span>
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
                      className="bg-green-400 text-gray-950 px-5 py-2 rounded-xl text-sm font-bold hover:bg-green-300 transition flex items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-700 text-gray-300 px-5 py-2 rounded-xl text-sm font-medium hover:border-green-400 hover:text-green-400 transition flex items-center gap-2"
                    >
                      <img src="/github.svg" alt="GitHub" width={14} height={14} className="brightness-0 invert opacity-80" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right */}
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
          <p className="text-gray-500 mb-4">More projects on my GitHub</p>
          <a
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 text-gray-300 px-6 py-3 rounded-xl text-sm font-medium hover:border-green-400 hover:text-green-400 transition inline-flex items-center gap-2"
          >
            <img src="/github.svg" alt="GitHub" width={16} height={16} className="brightness-0 invert opacity-80" />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}