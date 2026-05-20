import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-green-400/20 to-gray-800 border border-green-400/20 flex items-center justify-center">
                <span className="text-8xl"><img src="/abdul.png" alt="abdul" /></span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2">
                <p className="text-green-400 font-bold text-sm">2+ Years</p>
                <p className="text-gray-500 text-xs">Experience</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2">
                <p className="text-green-400 font-bold text-sm">10+</p>
                <p className="text-gray-500 text-xs">Projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate about building great software
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am a highly motivated software engineer with a problem-solving
              mindset, using critical thinking and minimalism to navigate
              complex challenges. I facilitate efficient software solutions with
              a driving focus on innovation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I thrive on fostering growth and embracing challenges. Currently
              serving in the NYSC program while building fullstack web
              applications and expanding into mobile development with React
              Native.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Name", value: "Abdulahi Sholabi" },
                { label: "Email", value: "abdulahisholabi@gmail.com" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Status", value: "Available for work" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-green-400 text-gray-950 px-6 py-2.5 rounded-xl font-bold hover:bg-green-300 transition text-sm"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/abdul-p"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 text-gray-300 px-6 py-2.5 rounded-xl font-medium hover:border-green-400 hover:text-green-400 transition text-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}