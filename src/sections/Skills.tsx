import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "React Native", level: 60 },
  ],
  Backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "REST APIs", level: 85 },
    { name: "MongoDB", level: 80 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Vercel", level: 80 },
    { name: "Cloudinary", level: 75 },
    { name: "MongoDB Atlas", level: 80 },
    { name: "Linux/Ubuntu", level: 70 },
  ],
};

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "Python", "Tailwind", "Git", "Vercel",
  "Cloudinary", "REST APIs", "React Native", "Expo", "Linux",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900/50">
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
            What I Work With
          </p>
          <h2 className="text-4xl font-bold text-white">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-6 text-lg">
                {category}
              </h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-sm">{skill.name}</span>
                      <span className="text-green-400 text-xs font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12"
        >
          <p className="text-gray-600 text-sm text-center mb-6 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 text-gray-300 px-4 py-2 rounded-xl text-sm hover:border-green-400/50 hover:text-green-400 transition cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}